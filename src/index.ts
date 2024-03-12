import { tokenSymbol } from "./tokens/index.";
import { Token, Values } from "./types";
import sanitizeRawString from "./utils/santize-input";

const getEmbeddedPattern = (token?: Token): string => {
	if (!token) {
		return '';
	}
	if (typeof token.pattern === 'string') {
		return token.pattern;
	}

	if (token.pattern && token.pattern[tokenSymbol]) {
		return extractPatterFromToken(token.pattern);
	}
	return '';
}

const extractPatterFromToken = (token?: Token): string => {
	const embeddedPattern = getEmbeddedPattern(token);
	switch (token?.type) {
		case 'START_WITH':
			return `^${embeddedPattern}`;
		case 'END_WITH':
			return `${embeddedPattern}$`;
		case 'HAS_AT_LEAST':
			return `${embeddedPattern}{${token.count || 1},}`;
		case 'HAS_EXACTLY':
			return `${embeddedPattern}{${token.count}}`
		case 'MATCH_SET':
			return `[${embeddedPattern}]`;
		case 'MATCH_GROUP':
			return `(${embeddedPattern})`;
		case "QUAINTLY_AT_LEAST":
			return `${embeddedPattern}{${token.count || 1},}`;
		case "QUAINTLY_EXACT":
			return `${embeddedPattern}{${token.count}}`;
		case "QUAINTLY_BETWEEN":
			return `${embeddedPattern}{${token.count || 1},${token.count || 1}}`;
		case 'OPTIONAL':
			return token.each ?
				[...embeddedPattern].map((char) => `${char}?`).join('')
				: `${embeddedPattern}?`;
		default:
			return embeddedPattern;
	}
}


function regexInEnglish(strings: TemplateStringsArray, ...values: Values[]) {
	const pattern = strings.reduce((prev, current, index) => {
		const token = values[index];
		const sanitizedCurrent = sanitizeRawString(current);
		return prev + sanitizedCurrent + extractPatterFromToken(token);
	}, '');
	const regex = new RegExp(pattern);
	return {
		rawRegex: regex,
		match: (input: string) => regex.test(input)
	};
}

export default regexInEnglish;

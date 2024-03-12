import { Token } from "../types";

export const tokenSymbol = Symbol('token');


export function START_WITH(pattern: Token | string): Token {
	return {
		type: 'START_WITH', pattern,
		[tokenSymbol]: true
	};
}

export function END_WITH(pattern: Token | string): Token {
	return {
		type: 'END_WITH', pattern,
		[tokenSymbol]: true

	};
}
export function HAS_EXACTLY(pattern: Token | string, count: number): Token {
	return { type: 'HAS_EXACTLY', pattern, count, [tokenSymbol]: true };
}

export function HAS_AT_LEAST(pattern: Token | string, count: number): Token {
	return { type: 'HAS_AT_LEAST', pattern, count, [tokenSymbol]: true };

}

export function MATCH_SET(pattern: Token | string): Token {
	return { type: 'MATCH_SET', pattern, [tokenSymbol]: true };
}


export function MATCH_GROUP(patterns: string[]): Token {
	const groupedPattern = patterns.join('|');
	return { type: 'MATCH_GROUP', pattern: groupedPattern };
}
export function OPTIONAL(pattern: Token | string, each?: boolean): Token {
	return { type: 'OPTIONAL', pattern, [tokenSymbol]: true, each };
}

export function QUAINTLY_EXACT(count: number): Token {
	return { type: 'QUAINTLY_EXACT', count, [tokenSymbol]: true };
}

export function QUAINTLY_AT_LEAST(count: number): Token {
	return { type: 'QUAINTLY_AT_LEAST', count, [tokenSymbol]: true };
}

export function QUAINTLY_BETWEEN(count: number): Token {
	return { type: 'QUAINTLY_AT_MOST', count, [tokenSymbol]: true };
}

export const RANGES = {
	ALPHA: 'a-zA-Z',
	ALPHA_LOWER: 'a-z',
	ALPHA_UPPER: 'A-Z',
	DIGITS: '0-9',
	SPACE: '\\s',
	NEW_LINE: '\\n',

}
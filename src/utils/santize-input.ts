
const NEED_ESCAPE_CHAR_SET = new Set(['.', '@', '[', ']', '(', ')', '{', '}', '|', '*', '+', '?', '.', '\\', '^', '$']);



const sanitizeRawString = (current: string) => {
	let sanitizedCurrent = current.replace(/[\s\t]/gim, '');
	if (NEED_ESCAPE_CHAR_SET.has(sanitizedCurrent)) {
		sanitizedCurrent = `\\${sanitizedCurrent}`;
	}
	return sanitizedCurrent;
}

export default sanitizeRawString;

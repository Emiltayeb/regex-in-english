# Regex-in-English

Welcome to Regex-in-English, the simple and intuitive way to work with regular expressions in JavaScript!

Regex-in-English provides a set of easy-to-use functions and abstractions that allow you to define complex regular expression patterns using plain English-like syntax. Say goodbye to cryptic regex symbols and hello to expressive and readable patterns!

## Installation

You can install Regex-in-English via npm:

```bash
npm install regex-in-english
```

# Usage

Using Regex-in-English is straightforward. Here's how you can get started:

```ts
import regexInEnglish from "regex-in-english";

// Define your regular expression pattern using English-like syntax
const pattern = regexInEnglish`
	 ${START_WITH("he")} // Start with 'he'
	 ${HAS_EXACTLY("l", 2)} // Followed by exactly 2 'l' characters
	.* // Followed by any number of characters
	 ${END_WITH(MATCH_SET("dl"))} // End with 'd' or 'l'
`;

// Test your pattern against a string
pattern.match("hello world"); // Output: true
pattern.match("helllo world"); // Output: false
```

## Tokens

Regex-in-English provides the following Tokens for building regular expression patterns:

- `START_WITH(pattern: string): Token`: Specifies that the string must start with the given pattern.
- `END_WITH(pattern: string): Token`: Specifies that the string must end with the given pattern.
- `HAS_EXACTLY(pattern: string, count: number): Token`: Specifies that the string must contain exactly count occurrences of the given pattern.
- `HAS_AT_LEAST(pattern: string, count: number): Token`: Specifies that the string must contain at least count occurrences of the given pattern.
- `MATCH_GROUP(patterns: string[]): Token`: Specifies a group of patterns, of which one must be present in the string.
- `OPTIONAL(pattern: string, each?: boolean): Token`: Specifies that the given pattern is optional in the string.
- `QUAINTLY_EXACT(count: number): Token`: Specifies that the string must contain exactly count characters.
- `QUAINTLY_AT_LEAST(count: number): Token`: Specifies that the string must contain at least count characters.
- `QUAINTLY_BETWEEN(count: number): Token`: Specifies a range of characters that the string must fall within.

## Building Complex Patterns

In addition, each token can recive another token as a parameter, allowing you to build complex patterns using a simple and intuitive syntax.

Here's a simple example of how you can use these tokens to define a regular expression pattern.

```ts
import regexInEnglish from "regex-in-english";

const emailPAttern = regexInEnglish`
	${START_WITH(MATCH_SET(RANGES.ALPHA + RANGES.DIGITS))} // Start with a letter or digit
	${QUAINTLY_AT_LEAST(1)} // Followed by at least one character
	@ // Followed by an '@' character
	${HAS_AT_LEAST(MATCH_SET(RANGES.ALPHA + RANGES.DIGITS), 1)} // Followed by at least one letter or digit
	.	// Followed by a '.' character
	${HAS_AT_LEAST(MATCH_SET(RANGES.ALPHA + RANGES.DIGITS), 2)} `; // Followed by at least two letters or digits

emailPAttern.match("test@example.com"
```

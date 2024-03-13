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

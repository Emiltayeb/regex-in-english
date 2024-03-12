
import regexInEnglish from '../index';
import { START_WITH, HAS_EXACTLY, MATCH_SET, END_WITH, MATCH_GROUP, OPTIONAL, RANGES, HAS_AT_LEAST, QUAINTLY_AT_LEAST } from '../tokens/index.';


describe('regexInEnglish', () => {
	test('Matches correctly with basic rules', () => {
		const { match } = regexInEnglish`
            ${START_WITH('he')}
            ${HAS_EXACTLY('l', 2)}
						.*
            ${END_WITH(MATCH_SET('lc'))}
        `;

		expect(match('hello worl')).toBeTruthy();
		expect(match('hello worc')).toBeTruthy();
	});


	test("Optional", () => {
		const { match, rawRegex } = regexInEnglish`
		${MATCH_SET(RANGES.ALPHA)}
		${OPTIONAL('b')}
		${OPTIONAL('ddd', true)}
		`;

		expect(match('a')).toBeTruthy();
		expect(match('ab')).toBeTruthy();
	});

	test("Match group", () => {
		const { match, rawRegex } = regexInEnglish`
		${MATCH_GROUP(['b', 'cd'])}
		ef
		`;
		expect(match('bef ')).toBeTruthy();
		expect(match('cdef')).toBeTruthy();
	});

	test("Email", () => {
		const { match, rawRegex } = regexInEnglish`
		${START_WITH(MATCH_SET(RANGES.ALPHA + RANGES.DIGITS))}
		${QUAINTLY_AT_LEAST(1)}
		@
		${HAS_AT_LEAST(
			MATCH_SET(RANGES.ALPHA + RANGES.DIGITS)
			, 1
		)}
		.
		${HAS_AT_LEAST(
			MATCH_SET(RANGES.ALPHA + RANGES.DIGITS)
			, 2
		)}
		`;


		expect(match('a1@b.com')).toBeTruthy();
		expect(match('a1@b.com')).toBeTruthy();
		expect(match('')).toBeFalsy();
		expect(match('a1@b')).toBeFalsy();
	});
	// Add more test cases as needed
});


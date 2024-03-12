
export type TokenOptions = 'START_WITH' | 'END_WITH' | 'HAS_AT_LEAST'
	| 'HAS_EXACTLY' | 'RAW' | 'HAS_AT_LEAST' | 'MATCH_SET' | 'MATCH_GROUP' | 'OPTIONAL'
	| 'QUAINTLY_EXACT' | 'QUAINTLY_AT_LEAST' | 'QUAINTLY_BETWEEN' | 'QUAINTLY_AT_MOST';



export interface Token {
	type: TokenOptions;
	pattern?: Pattern;
	count?: number;
	each?: boolean;
	[key: symbol]: boolean;
}



export type Values = Token;

export type Pattern = string | Token;


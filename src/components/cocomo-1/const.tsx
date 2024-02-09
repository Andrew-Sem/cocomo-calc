export const tableValues = {
	common: [3.2, 1.05, 2.5, 0.38],
	semiIndependent: [3.0, 1.12, 2.5, 0.35],
	embedded: [2.8, 1.2, 2.5, 0.32],
};

export type CostValue = {
	veryLow: number | null;
	low: number | null;
	mid: number;
	high: number;
	veryHigh: number | null;
	critical: number | null;
};

export const costValuesTable: CostValue[] = [
	{
		veryLow: 0.75,
		low: 0.88,
		mid: 1,
		high: 1.15,
		veryHigh: 1.4,
		critical: null,
	},
	{
		veryLow: null,
		low: 0.94,
		mid: 1,
		high: 1.08,
		veryHigh: 1.16,
		critical: null,
	},
	{
		veryLow: 0.7,
		low: 0.85,
		mid: 1,
		high: 1.15,
		veryHigh: 1.3,
		critical: 1.65,
	},
	{
		veryLow: null,
		low: null,
		mid: 1,
		high: 1.11,
		veryHigh: 1.3,
		critical: 1.66,
	},
	{
		veryLow: null,
		low: null,
		mid: 1,
		high: 1.06,
		veryHigh: 1.21,
		critical: 1.56,
	},
	{
		veryLow: null,
		low: 0.87,
		mid: 1,
		high: 1.15,
		veryHigh: 1.3,
		critical: null,
	},
	{
		veryLow: null,
		low: 0.87,
		mid: 1,
		high: 1.07,
		veryHigh: 1.15,
		critical: null,
	},
	{
		veryLow: 1.46,
		low: 1.19,
		mid: 1,
		high: 0.86,
		veryHigh: 0.71,
		critical: null,
	},
	{
		veryLow: 1.29,
		low: 1.13,
		mid: 1,
		high: 0.91,
		veryHigh: 0.82,
		critical: null,
	},
	{
		veryLow: 1.42,
		low: 1.17,
		mid: 1,
		high: 0.86,
		veryHigh: 0.7,
		critical: null,
	},
	{
		veryLow: 1.21,
		low: 1.1,
		mid: 1,
		high: 0.9,
		veryHigh: null,
		critical: null,
	},
	{
		veryLow: 1.14,
		low: 1.07,
		mid: 1,
		high: 0.95,
		veryHigh: null,
		critical: null,
	},
	{
		veryLow: 1.24,
		low: 1.1,
		mid: 1,
		high: 0.91,
		veryHigh: 0.82,
		critical: null,
	},
	{
		veryLow: 1.24,
		low: 1.1,
		mid: 1,
		high: 0.91,
		veryHigh: 0.83,
		critical: null,
	},
	{
		veryLow: 1.23,
		low: 1.08,
		mid: 1,
		high: 1.04,
		veryHigh: 1.1,
		critical: null,
	},
];

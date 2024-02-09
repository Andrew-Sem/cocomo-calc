export const tableValues = {
	common: [3.2, 1.05, 2.5, 0.38],
	semiIndependent: [3.0, 1.12, 2.5, 0.35],
	embedded: [2.8, 1.2, 2.5, 0.32],
};

export type CostValue = {
	veryLow: number | null;
	low: number | null;
	nominal: number;
	high: number;
	veryHigh: number | null;
	extraHigh: number | null;
};

export const costValuesTable: CostValue[] = [
	{
		veryLow: 1.42,
		low: 1.29,
		nominal: 1,
		high: 0.85,
		veryHigh: 0.71,
		extraHigh: null,
	},
	{
		veryLow: 1.22,
		low: 1.1,
		nominal: 1,
		high: 0.88,
		veryHigh: 0.81,
		extraHigh: null,
	},
	{
		veryLow: 1.34,
		low: 1.15,
		nominal: 1,
		high: 0.88,
		veryHigh: 0.76,
		extraHigh: null,
	},
	{
		veryLow: 1.29,
		low: 1.12,
		nominal: 1,
		high: 0.9,
		veryHigh: 0.81,
		extraHigh: null,
	},
	{
		veryLow: 1.19,
		low: 1.09,
		nominal: 1,
		high: 0.91,
		veryHigh: 0.85,
		extraHigh: null,
	},
	{
		veryLow: 1.2,
		low: 1.09,
		nominal: 1,
		high: 0.91,
		veryHigh: 0.84,
		extraHigh: null,
	},
	{
		veryLow: 0.84,
		low: 0.92,
		nominal: 1,
		high: 1.1,
		veryHigh: 1.26,
		extraHigh: null,
	},
	{
		veryLow: null,
		low: 0.23,
		nominal: 1,
		high: 1.14,
		veryHigh: 1.28,
		extraHigh: null,
	},
	{
		veryLow: 0.73,
		low: 0.87,
		nominal: 1,
		high: 1.17,
		veryHigh: 1.34,
		extraHigh: 1.74,
	},
	{
		veryLow: null,
		low: 0.95,
		nominal: 1,
		high: 1.07,
		veryHigh: 1.15,
		extraHigh: 1.24,
	},
	{
		veryLow: 0.81,
		low: 0.91,
		nominal: 1,
		high: 1.11,
		veryHigh: 1.23,
		extraHigh: null,
	},
	{
		veryLow: null,
		low: null,
		nominal: 1,
		high: 1.11,
		veryHigh: 1.29,
		extraHigh: 1.63,
	},
	{
		veryLow: null,
		low: null,
		nominal: 1,
		high: 1.05,
		veryHigh: 1.17,
		extraHigh: 1.46,
	},
	{
		veryLow: null,
		low: 0.87,
		nominal: 1,
		high: 1.15,
		veryHigh: 1.3,
		extraHigh: null,
	},
	{
		veryLow: 1.17,
		low: 1.09,
		nominal: 1,
		high: 0.9,
		veryHigh: 0.78,
		extraHigh: null,
	},
	{
		veryLow: 1.22,
		low: 1.09,
		nominal: 1,
		high: 0.93,
		veryHigh: 0.86,
		extraHigh: 0.8,
	},
	{
		veryLow: 1.43,
		low: 1.14,
		nominal: 1,
		high: 1,
		veryHigh: 1,
		extraHigh: null,
	},
];

export const A = 2.45;
export const B = 0.91;
export const C = 3.67;
export const D = 0.28;

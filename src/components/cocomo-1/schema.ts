import { z } from "zod";

export const availableFields = [
	"requiredReliability",
	"dbSize",
	"complexity",
	"performanceLimitations",
	"memoryLimitations",
	"VMEnvInstability",
	"requiredRecoveryTime",
	"analyticalSkills",
	"devExp",
	"devAbilities",
	"VMUsageExp",
	"devExpInProgLangs",
	"applyingDevMethods",
	"useSoftwareTools",
	"requiredForSheduleCompliance",
];

export const formSchema = z.object({
	size: z.coerce.number(),
	type: z.enum(["common", "semiIndependent", "embedded"]),
	requiredReliability: z.enum([
		"veryLow",
		"low",
		"mid",
		"high",
		"veryHigh",
		"critical",
	]),
	dbSize: z.enum(["veryLow", "low", "mid", "high", "veryHigh", "critical"]),
	complexity: z.enum(["veryLow", "low", "mid", "high", "veryHigh", "critical"]),
	performanceLimitations: z.enum([
		"veryLow",
		"low",
		"mid",
		"high",
		"veryHigh",
		"critical",
	]),
	memoryLimitations: z.enum([
		"veryLow",
		"low",
		"mid",
		"high",
		"veryHigh",
		"critical",
	]),
	VMEnvInstability: z.enum([
		"veryLow",
		"low",
		"mid",
		"high",
		"veryHigh",
		"critical",
	]),
	requiredRecoveryTime: z.enum([
		"veryLow",
		"low",
		"mid",
		"high",
		"veryHigh",
		"critical",
	]),
	analyticalSkills: z.enum([
		"veryLow",
		"low",
		"mid",
		"high",
		"veryHigh",
		"critical",
	]),
	devExp: z.enum(["veryLow", "low", "mid", "high", "veryHigh", "critical"]),
	devAbilities: z.enum([
		"veryLow",
		"low",
		"mid",
		"high",
		"veryHigh",
		"critical",
	]),
	VMUsageExp: z.enum(["veryLow", "low", "mid", "high", "veryHigh", "critical"]),
	devExpInProgLangs: z.enum([
		"veryLow",
		"low",
		"mid",
		"high",
		"veryHigh",
		"critical",
	]),
	applyingDevMethods: z.enum([
		"veryLow",
		"low",
		"mid",
		"high",
		"veryHigh",
		"critical",
	]),
	useSoftwareTools: z.enum([
		"veryLow",
		"low",
		"mid",
		"high",
		"veryHigh",
		"critical",
	]),
	requiredForSheduleCompliance: z.enum([
		"veryLow",
		"low",
		"mid",
		"high",
		"veryHigh",
		"critical",
	]),
});

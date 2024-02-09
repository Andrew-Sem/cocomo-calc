"use client";

import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { CostValue, costValuesTable, tableValues } from "./const";
import { availableFields, formSchema } from "./schema";
import { fromCamelToNormal } from "@/lib/utils";

const projectTypes = ["common", "semiIndependent", "embedded"];

export function BaseForm() {
	const { toast } = useToast();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			size: 0,
			type: "common",
			requiredReliability: "mid",
			dbSize: "mid",
			complexity: "mid",
			performanceLimitations: "mid",
			memoryLimitations: "mid",
			VMEnvInstability: "mid",
			requiredRecoveryTime: "mid",
			analyticalSkills: "mid",
			devExp: "mid",
			devAbilities: "mid",
			VMUsageExp: "mid",
			devExpInProgLangs: "mid",
			applyingDevMethods: "mid",
			useSoftwareTools: "mid",
			requiredForSheduleCompliance: "mid",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		const getCost = (value: CostValue, key: string) => {
			//@ts-ignore
			return value[key];
		};
		const EAF = Object.values(values)
			.slice(2)
			.reduce(
				//@ts-ignore
				(acc, cur, i) => acc * getCost(costValuesTable[i], cur),
				1,
			) as number;
		const PM =
			EAF *
			tableValues[values.type][0] *
			values.size ** tableValues[values.type][1];
		const TM = tableValues[values.type][2] * PM ** tableValues[values.type][3];
		toast({
			title: "Результаты",
			description: `PM: ${PM.toFixed(2)}p/m TM: ${TM.toFixed(2)}m`,
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="type"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Тип проекта</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select a verified email to display" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{projectTypes.map((projectType) => (
										<SelectItem value={projectType} key={projectType}>
											{projectType}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="size"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Объем программы</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="Введите количество строк кода (тыс)"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="grid grid-cols-2 gap-4">
					{costValuesTable.map((costValue, i) => (
						<FormField
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							control={form.control}
							//@ts-ignore
							name={availableFields[i]}
							render={({ field }) => (
								<FormItem>
									<FormLabel>{fromCamelToNormal(availableFields[i])}</FormLabel>
									<Select
										onValueChange={field.onChange}
										//@ts-ignore
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a verified email to display" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{Object.keys(costValue).map((value) =>
												//@ts-ignore
												costValue[value] ? (
													<SelectItem value={value} key={value}>
														{fromCamelToNormal(value)}
													</SelectItem>
												) : null,
											)}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					))}
				</div>
				<Button type="submit">Рассчитать PM и TM</Button>
			</form>
		</Form>
	);
}

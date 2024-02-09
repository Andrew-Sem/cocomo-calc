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
import { B, C, CostValue, D, costValuesTable, tableValues } from "./const";
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
			ACAP: "nominal",
			AEXP: "nominal",
			PCAP: "nominal",
			PCON: "nominal",
			PEXP: "nominal",
			LTEX: "nominal",
			RELY: "nominal",
			DATA: "nominal",
			CPLX: "nominal",
			RUSE: "nominal",
			DOCU: "nominal",
			TIME: "nominal",
			STOR: "nominal",
			PVOL: "nominal",
			TOOL: "nominal",
			SITE: "nominal",
			SCED: "nominal",
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
		const SSF = Object.values(values)
			.slice(2, 7)
			.reduce(
				//@ts-ignore
				(acc, cur, i) => acc * getCost(costValuesTable[i], cur),
				1,
			) as number;
		const E = 0.01 * SSF;
		const PM =
			EAF *
			tableValues[values.type][0] *
			values.size ** tableValues[values.type][1];
		const TM =
			//@ts-ignore
			costValuesTable[costValuesTable.length - 1][values.SCED] *
			C *
			PM ** (D + 0.2 * (E - B));
		toast({
			title: "Results",
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
							<FormLabel>Project type</FormLabel>
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
							<FormLabel>Source code volume</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="Enter the number of lines of code"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{costValuesTable.map((costValue, i) => (
						<FormField
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							control={form.control}
							// @ts-ignore
							name={availableFields[i]}
							render={({ field }) => (
								<FormItem>
									<FormLabel>{availableFields[i]}</FormLabel>
									<Select
										onValueChange={field.onChange}
										//@ts-ignore
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue />
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
				<Button type="submit">Calculate</Button>
			</form>
		</Form>
	);
}

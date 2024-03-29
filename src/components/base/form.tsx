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

const projectTypes = ["common", "semiIndependent", "embedded"];

const formSchema = z.object({
	size: z.coerce.number(),
	type: z.enum(["common", "semiIndependent", "embedded"]),
});

const tableValues = {
	common: [2.4, 1.05, 2.5, 0.38],
	semiIndependent: [3.0, 1.12, 2.5, 0.35],
	embedded: [3.6, 1.2, 2.5, 0.32],
};

export function BaseForm() {
	const { toast } = useToast();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			size: 0,
			type: "common",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		if (!values.type) return;
		const PM =
			tableValues[values.type][0] * values.size ** tableValues[values.type][1];
		const TM = tableValues[values.type][2] * PM ** tableValues[values.type][3];
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
										<SelectValue />
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
				<Button type="submit">Calculate</Button>
			</form>
		</Form>
	);
}

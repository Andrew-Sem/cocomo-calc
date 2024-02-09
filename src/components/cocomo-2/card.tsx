import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BaseForm } from "./form";

export const Cocomo2Card = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Cocomo 2</CardTitle>
			</CardHeader>
			<CardContent>
				<BaseForm />
			</CardContent>
		</Card>
	);
};

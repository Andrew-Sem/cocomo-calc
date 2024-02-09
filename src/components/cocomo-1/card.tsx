import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BaseForm } from "./form";

export const Cocomo1Card = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Cocomo 1</CardTitle>
			</CardHeader>
			<CardContent>
				<BaseForm />
			</CardContent>
		</Card>
	);
};

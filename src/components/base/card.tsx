import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BaseForm } from "./form";

export const BaseCard = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Базовый уровень</CardTitle>
			</CardHeader>
			<CardContent>
				<BaseForm />
			</CardContent>
		</Card>
	);
};

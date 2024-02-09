import { BaseCard } from "@/components/base/card";
import { Toaster } from "@/components/ui/toaster";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="flex flex-col items-center p-10">
			<div className="max-w-xl w-full">
				<BaseCard />
				<Toaster />
			</div>
		</div>
	);
}

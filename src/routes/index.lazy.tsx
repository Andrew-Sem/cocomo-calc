import { BaseCard } from "@/components/base/card";
import { Toaster } from "@/components/ui/toaster";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return <BaseCard />;
}

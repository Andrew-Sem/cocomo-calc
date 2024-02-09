import { Cocomo2Card } from "@/components/cocomo-2/card";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/cocomo-2")({
	component: Cocomo2,
});

function Cocomo2() {
	return <Cocomo2Card />;
}

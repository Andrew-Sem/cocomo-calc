import { Cocomo1Card } from "@/components/cocomo-1/card";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/cocomo-1")({
	component: Cocomo1,
});

function Cocomo1() {
	return <Cocomo1Card />;
}

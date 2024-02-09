import { Toaster } from "@/components/ui/toaster";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<>
			<nav className="p-4 flex gap-4">
				<Link to="/" className="[&.active]:font-bold">
					Base
				</Link>
				<Link to="/cocomo-1" className="[&.active]:font-bold">
					Cocomo 1
				</Link>
				<Link to="/cocomo-2" className="[&.active]:font-bold">
					Cocomo 2
				</Link>
			</nav>
			<hr />
			<div className="flex flex-col items-center my-10 container">
				<div className="max-w-2xl w-full">
					<Outlet />
				</div>
			</div>
			<Toaster />
		</>
	),
});

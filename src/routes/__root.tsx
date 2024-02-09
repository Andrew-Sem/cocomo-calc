import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="p-4 flex gap-4">
				<Link to="/" className="[&.active]:font-bold">
					Base
				</Link>
			</div>
			<hr />
			<Outlet />
		</>
	),
});

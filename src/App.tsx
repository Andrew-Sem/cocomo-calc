import { BaseCard } from "./components/base-card";
import { Toaster } from "@/components/ui/toaster";

function App() {
	return (
		<div className="flex flex-col items-center p-10">
			<div className="max-w-xl w-full">
				<BaseCard />
				<Toaster />
			</div>
		</div>
	);
}

export default App;

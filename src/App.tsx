import { BaseCard } from "./components/base-card";
import { Toaster } from "@/components/ui/toaster";
import { SelectForm } from "./components/test-form";

function App() {
	return (
		<div className="flex flex-col items-center p-10">
			<div className="max-w-xl w-full">
				<BaseCard />
				<SelectForm />
				<Toaster />
			</div>
		</div>
	);
}

export default App;

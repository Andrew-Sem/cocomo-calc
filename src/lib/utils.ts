import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function fromCamelToNormal(text: string) {
	const result = text.replace(/([A-Z])/g, " $1").toLowerCase();
	const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
	return finalResult;
}

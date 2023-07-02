import { ReactNode, useState, useEffect } from 'react';
import InsertionPoint from './InsertionPoint';

interface MainDescriptionProps {
	children: ReactNode;
	speed?: number;
}

export default function MainDescription({ children, speed }: MainDescriptionProps) {
	const [text, setText] = useState<string>("");
	useEffect(function () {
		setText("");
		const letters = (children as string).split("");
		letters.forEach((letter, index) => setTimeout(() => setText(prev => prev += letter), index * (speed ?? 20)));
	}, []);
	return (
		<div className="pl-5 py-1 md:text-xl font-light w-auto relative">
			<p className="invisible"> {children} <InsertionPoint /> </p>
			<p className="absolute top-[3px] left-[20px] -z-10"> {text} <InsertionPoint /> </p>
		</div>
	);
}
import { MouseEvent, useRef, useEffect } from 'react';
interface MainTitleProps {
	intro: string;
	name: string;
}

export default function MainTitle({ intro, name }: MainTitleProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const letters = "abcdcefgijklnprstuvyz";

	useEffect(function() {
		ref.current?.click();
	}, []);

	function handleClick(event: MouseEvent<HTMLSpanElement>) {
		const iteration = 12;
		let iterations = -1;
		const target = event.target as HTMLSpanElement;
		const interval = setInterval(function () {
			target.innerText = target.innerText.split("")
				.map(function (_, index) {
					if (index < iterations) return name[index];
					return letters[Math.floor(Math.random() * letters.length)];
				}).join("");
			if (iterations > name.length) {
				clearInterval(interval);
				iterations = 0;
			}
			iterations += 1 / iteration;
		}, 30);
	}

	return (
		<h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-snug">
			{intro} <br className="sm:hidden"/><span onClick={handleClick} className="cursor-pointer" ref={ref}>{name}</span><span className="text-red-400">.</span>
		</h1>
	);
}
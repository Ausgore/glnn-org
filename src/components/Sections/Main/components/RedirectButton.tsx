import { ReactNode } from 'react';
import { motion } from 'framer-motion';
interface RedirectButton {
	children: ReactNode;
	to?: string;
}

export default function RedirectButton({ children, to }: RedirectButton) {
	function handleClick() {
		window.history.pushState({}, "", `#${to}`);
		const element = document.getElementById(to as string);
		element?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<motion.button
			initial={{ backgroundColor: "#f87171" }}
			whileHover={{ backgroundColor: "#ff5555", transition: { duration: 0.6, ease: "easeOut" } }}
			whileTap={{ backgroundColor: "#fa5656", scale: 0.95, transition: { duration: 0.6, ease: "easeOut"} }}
			className="rounded-md text-[#111111] py-2 px-5 mx-6 my-2 font-semibold text-center cursor-pointer" onClick={handleClick}
		>
			{children}
		</motion.button>
	)
}
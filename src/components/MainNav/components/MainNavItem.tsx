import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MainNavItemProps {
	children: ReactNode;
	scrollTo?: string;
}

export default function MainNavItem({ children, scrollTo }: MainNavItemProps) {
	function scrollToSection() {
		window.history.pushState({}, "", `#${scrollTo}`);
		const element = document.getElementById(scrollTo as string);
		element?.scrollIntoView(true);
	}

	return (
		<motion.a
			initial={{ color: "#7a7a7e" }}
			whileHover={{ borderColor: "rgb(239, 68, 68)", color: "#ebecf3", backgroundColor: "#111111" }}
			className={`border-r-2 py-10 border-transparent cursor-pointer`}
			onClick={scrollToSection}
		>
			<div className="rotate-90 text-center"> {children} </div>
		</motion.a>
	);
}
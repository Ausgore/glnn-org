import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AboutBodyProps {
	children?: ReactNode;
}

export default function AboutBody({ children }: AboutBodyProps) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -300 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 1, ease: "easeOut" }}
			className="grid grid-cols-2"
		>
			{children}
		</motion.div>
	);
}
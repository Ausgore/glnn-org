import { ReactNode } from 'react';
import { motion } from 'framer-motion';
interface ProjectCardProps {
	children: ReactNode;
}

export default function ProjectCard(props: ProjectCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true }}
			className="relative w-full px-4 pb-12"
		>
			{props.children}
		</motion.div>
	)
}
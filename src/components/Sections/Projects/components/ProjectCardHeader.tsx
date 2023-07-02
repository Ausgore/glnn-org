import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

interface ProjectCardHeaderProps {
	url?: string;
	image?: string;
	children?: ReactNode;
}

export default function ProjectCardHeader({ children, url, image }: ProjectCardHeaderProps) {
	return (
		<>
			<img src={image} className="h-[12rem] w-screen" />
			<header className="mt-4 pb-2 flex items-center justify-center flex-row">
				<h4 className="text-2xl font-bold mr-4"> {children} </h4>
				<div className="border-b-2 border-[#535355] border-solid flex-1" />
				{url &&
					<motion.a
						initial={{ color: "#7a7a7e", scale: 1 }}
						whileHover={{ color: "#f87171" }}
						whileTap={{ scale: 1.15 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="ml-4 text-3xl" href={url} target="_blank"
					>
						<FontAwesomeIcon icon={faGithub} />
					</motion.a>}
			</header>
		</>
	);
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';

interface MediaNavItemProps {
	icon: IconProp;
	url?: string;
	delay?: number;
}

export default function MediaNavItem({ icon, url, delay }: MediaNavItemProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -100, color: "#7a7a7e" }}
			animate={{ opacity: 1, y: 0 }}
			whileHover={{ color: "#ff6565", transition: { duration: 0.4 } }}
			whileTap={{ scale: 1.3, transition: { duration: 0.2 } }}
			transition={{ ease: "easeOut", duration: 1 + (delay ?? 0) }}
			className="px-5"
		>
			<a href={url} target="_blank">
				<FontAwesomeIcon icon={icon} className="cursor-pointer text-2xl" />
			</a>
		</motion.div>
	);
}

import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import image from "../../../../assets/images/fiverr.png";

interface AboutImageProps {
	footer?: string;
}

export default function AboutImage({ footer }: AboutImageProps) {
	const ref = useRef<HTMLAnchorElement>(null);

	useEffect(function() {
		function handleMouseMove(event: MouseEvent) {
			const imgElement = ref.current;
			if (imgElement) {
				const rect = imgElement.getBoundingClientRect();
				const x = event.clientX - (rect.left + rect.width / 2);
				const y = event.clientY - (rect.top + rect.height / 2);
				const xRotation = Math.min(Math.max(-20 * (y / rect.height), -10), 10);
				const yRotation = Math.min(Math.max(20 * (x / rect.width), -10), 10);

				imgElement.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
			}
		};
		document.addEventListener('mousemove', handleMouseMove);
		return () => document.removeEventListener('mousemove', handleMouseMove);
	});

	return (
		<aside className="hidden lg:block col-span-1 ml-auto duration-1000 ease-out cursor-pointer" ref={ref}>
			<a href="https://www.fiverr.com" target="_blank">
				<motion.div className="text-center" initial={{ scale: 0.9 }} whileTap={{ scale: 0.85 }} transition={{ ease: "easeOut", duration: 0.6 }}>
					<img src={image} className="rounded-lg shadow-2xl" />
					<footer className="mt-4"> {footer} </footer>
				</motion.div>
			</a>
		</aside>
	);
}
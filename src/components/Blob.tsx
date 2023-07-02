import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';

export default function Blob() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const blobElement = ref.current;
		if (blobElement) {

			const handleWindowResize = () => {
				const { innerWidth, innerHeight } = window;
				blobElement.animate({
					left: `${innerWidth / 2}px`,
					top: `${innerHeight / 2}px`
				}, { duration: 100, fill: "forwards" });
			};

			const handleMouseMove = (event: MouseEvent) => {
				const maxWidth = document.documentElement.clientWidth - blobElement.offsetWidth;
				const maxHeight = document.documentElement.clientHeight - blobElement.offsetHeight;
				const { clientX, clientY } = event;
				let newLeft = Math.min(Math.max(clientX, 0), maxWidth);
				let newTop = Math.min(Math.max(clientY, 0), maxHeight);

				blobElement.animate({
					left: `${newLeft}px`,
					top: `${newTop}px`
				}, { duration: 2000, fill: "forwards" });
			};
			window.addEventListener("resize", handleWindowResize);
			document.addEventListener('mousemove', handleMouseMove);
			return () => {
				document.removeEventListener('mousemove', handleMouseMove);
				window.removeEventListener("resize", handleWindowResize);
			};
		}
	}, []);

	return (
		<>
			<div className="h-full w-full absolute z-[1] backdrop-blur-[120px] sm:backdrop-blur-[200px] xl:backdrop-blur-[240px]" />
			<motion.div ref={ref}
				animate={{ rotate: 360, skewX: [0, 40, 0] }}
				transition={{ repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }}
				style={{ translate: "-50% -50%" }}
				className="bg-gradient-to-r from-[#ff8800] to-[#8400ff] rounded-[50%] h-[200px] sm:h-[300px] xl:h-[300px] aspect-square absolute left-1/2 top-1/2"
			/>
		</>
	);
}
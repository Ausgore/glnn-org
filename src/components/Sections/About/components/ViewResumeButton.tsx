import { motion } from 'framer-motion';
export default function ViewResumeButton() {
	return (
		<motion.button
			initial={{ backgroundColor: "#f87171" }}
			whileHover={{ backgroundColor: "#ff5555", transition: { duration: 0.6, ease: "easeOut" } }}
			whileTap={{ backgroundColor: "#fa5656", scale: 0.95, transition: { duration: 0.6, ease: "easeOut" } }}
			className="rounded-md text-[#111111] py-2 px-5 mt-4 font-semibold text-center cursor-pointer"
		>
			<a href="https://drive.google.com/file/d/1dQNXMotMHoI8ekfgLmkB6XRpSzj2Uqf2/view?usp=sharing" target="_blank"> View Resume.pdf </a>
		</motion.button>
	);
}
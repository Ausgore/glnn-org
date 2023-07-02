import SectionWrapper from "../SectionWrapper";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';

export default function Contact() {
	return (
		<footer>
			<SectionWrapper id="contact" className="pt-[6rem] text-center mb-[16rem] lg:mb-[20rem]">
				<h1 className="font-black text-6xl lg:text-8xl"> Contact<span className="text-red-400">.</span></h1>
				<p className="text-xl font-extralight m-auto w-3/4 mt-6"> Shoot me an email if you want to connect. Feel free to look me up on <a href="https://www.linkedin.com/in/glenn-marcell-tjandra-a13529281/" target="_blank" className="text-red-400 font-normal">Linkedin</a> or check out my gigs on <a href="https://www.fiverr.com/glenn_mt" target="_blank" className="text-red-400 font-normal">Fiverr</a> if you'd like to get a sense of my work before we collaborate. </p>
				<div className="mt-8 text-2xl">
					<motion.a href="mailto:glenn.emte@gmail.com" whileHover={{ color: "#f87171", transition: { duration: 0.2, ease: "easeOut"} }}> 
						<EmailIcon /> glenn.emte@gmail.com 
					</motion.a>
					<p className="mt-4 hover:cursor-default"> <PhoneIcon /> +65 8389 7086 </p>
				</div>
			</SectionWrapper>
		</footer>
	)
}
import SectionWrapper from "../SectionWrapper";
import { motion } from 'framer-motion';
import MainTitle from "./components/MainTitle";
import MainAuthor from "./components/MainAuthor";
import Psuedo from "./components/Psuedo";
import MainDescription from "./components/MainDescription";
import RedirectButton from "./components/RedirectButton";

export default function Main() {
	return (
		<SectionWrapper id="main" className="py-0 md:py-[6.5rem]">
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ ease: "easeOut", duration: 0.8 }}
			>
				<MainTitle intro="Hey, I'm" name="Glenn" />
				<MainAuthor> I'm a <span className="text-red-400 font-bold"> Full Stack Developer </span> </MainAuthor>
				<div className="py-5">
					{/* Text */}	
					<Psuedo> {`<div className="summary">`} </Psuedo>
					<MainDescription speed={10}> I create user-friendly projects that prioritizes seamless collaboration. By staying up to date with the latest technologies, I deliver innovative solutions that enhances user experiences and fosters effective teamwork. </MainDescription>
					<Psuedo> {"</div>"} </Psuedo>
					{/* Button */}
					<Psuedo> {"<button onClick={scrollToContact}>"} </Psuedo>
					<RedirectButton to="contact"> Contact Me </RedirectButton>
					<Psuedo> {"</button>"} </Psuedo>
				</div>
			</motion.div>
		</SectionWrapper>
	)
}
import SectionHeader from "../SectionHeader";
import SectionWrapper from "../SectionWrapper";

import { motion } from 'framer-motion';
import SkillsArticle from "./components/SkillsArticle";
import SkillLogo from './components/SkillLogo';
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiTypescript, SiMongodb, SiMysql, SiNestjs, SiNodedotjs, SiPostgresql, SiSequelize, SiSqlite, SiFigma, SiGit, SiNpm, SiPostman, SiYarn } from "react-icons/si";

export default function Skills() {

	return (
		<SectionWrapper id="skills" className="pt-[8rem]">
			{/* Header */}
			<SectionHeader>Skills</SectionHeader>
			<motion.div
				initial={{ opacity: 0, x: 300 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ ease: "easeOut", duration: 1 }}
				className="grid grid-rows-3 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 text-center"
			>
				{/* <SkillsArticle title="Front End" logos={["css3", "html5", "javascript", "react", "tailwindcss", "typescript", "vite"]} />
				<SkillsArticle title="Back End" logos={["mongodb", "mysql", "nestjs", "nodedotjs", "postgresql", "sequelize", "sqlite"]} />
				<SkillsArticle title="Tools" logos={["figma", "git", "npm", "postman", "yarn"]} /> */}
				<SkillsArticle title="Front end">
					<SkillLogo logo={SiJavascript} color="#F7DF1E" />
					<SkillLogo logo={SiTypescript} color="#3178C6" />
					<SkillLogo logo={SiReact} color="#61DAFB" />
					<SkillLogo logo={SiTailwindcss} color="#06B6D4"/>
					<SkillLogo logo={SiCss3} color="#1572B6" />
					<SkillLogo logo={SiHtml5} color="#E34F26" />
				</SkillsArticle>
				<SkillsArticle title="Back End">
					<SkillLogo logo={SiNodedotjs} color="" />
					<SkillLogo logo={SiNestjs} color="" />
					<SkillLogo logo={SiSequelize} color="" />
					<SkillLogo logo={SiPostgresql} color="" />
					<SkillLogo logo={SiMysql} color="" />
					<SkillLogo logo={SiMongodb} color="" />
					<SkillLogo logo={SiSqlite} color="" />
				</SkillsArticle>
				<SkillsArticle title="Tools">
					<SkillLogo logo={SiNpm} color="" />
					<SkillLogo logo={SiGit} color="" />
					<SkillLogo logo={SiPostman} color="" />
					<SkillLogo logo={SiYarn} color="" />
					<SkillLogo logo={SiFigma} color="" />
				</SkillsArticle>
			</motion.div>
		</SectionWrapper>
	)
}
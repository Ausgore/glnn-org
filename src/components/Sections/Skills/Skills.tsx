import SectionHeader from "../SectionHeader";
import SectionWrapper from "../SectionWrapper";

import css3 from "../../../assets/brands/frontend/css3.svg";
import html5 from "../../../assets/brands/frontend/html5.svg";
import javascript from "../../../assets/brands/frontend/javascript.svg";
import react from "../../../assets/brands/frontend/react.svg";
import tailwind from "../../../assets/brands/frontend/tailwind.svg";
import typescript from "../../../assets/brands/frontend/typescript.svg";
import vite from "../../../assets/brands/frontend/vite.svg";

import mongodb from "../../../assets/brands/backend/mongodb.svg";
import mysql from "../../../assets/brands/backend/mysql.svg";
import nestjs from "../../../assets/brands/backend/nestjs.svg";
import nodejs from "../../../assets/brands/backend/nodejs.svg";
import postgresql from "../../../assets/brands/backend/postgresql.svg";
import sequelize from "../../../assets/brands/backend/sequelize.svg";
import sqlite from "../../../assets/brands/backend/sqlite.svg";

import figma from "../../../assets/brands/tools/figma.svg";
import git from "../../../assets/brands/tools/git.svg";
import npm from "../../../assets/brands/tools/npm.svg";
import postman from "../../../assets/brands/tools/postman.svg";
import yarn from "../../../assets/brands/tools/yarn.svg";
import { motion } from 'framer-motion';
import SkillsArticle from "./components/SkillsArticle";


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
				<SkillsArticle title="Front End">
					<img src={css3} className="m-2" />
					<img src={html5} className="m-2" />
					<img src={javascript} className="m-2" />
					<img src={react} className="m-2" />
					<img src={tailwind} className="m-2" />
					<img src={typescript} className="m-2" />
					<img src={vite} className="m-2" />
				</SkillsArticle>
				<SkillsArticle title="Back End">
					<img src={mongodb} className="m-2" />
					<img src={mysql} className="m-2" />
					<img src={nestjs} className="m-2" />
					<img src={nodejs} className="m-2" />
					<img src={postgresql} className="m-2" />
					<img src={sequelize} className="m-2" />
					<img src={sqlite} className="m-2" />
				</SkillsArticle>
				<SkillsArticle title="Tools">
					<img src={figma} className="m-2" />
					<img src={git} className="m-2" />
					<img src={npm} className="m-2" />
					<img src={postman} className="m-2" />
					<img src={yarn} className="m-2" />
				</SkillsArticle>
			</motion.div>
		</SectionWrapper>
	)
}
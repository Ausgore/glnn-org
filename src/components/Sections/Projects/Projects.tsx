import SectionWrapper from "../SectionWrapper";
import SectionHeader from '../SectionHeader';
import ProjectCard from "./components/ProjectCard";
import ProjectCardHeader from "./components/ProjectCardHeader";
import ProjectCardArticle from "./components/ProjectCardArticle";

export default function Projects() {
	return (
		<SectionWrapper id="projects" className="pt-[6rem] mb-[6rem]">
			{/* Header */}
			<SectionHeader>Projects</SectionHeader>
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<ProjectCard>
					<img src="images/glnn.png" alt="" />
					<ProjectCardHeader url="https://github.com/ausgore/glnn-org" image="images/glnn.png"> glnn.dev </ProjectCardHeader>
					<ProjectCardArticle author="React - Tailwind - Framer Motion - Typescript">
						You're here right now! This website showcases my skills as a programmer and the projects that I've worked on.
					</ProjectCardArticle>
				</ProjectCard>
				<ProjectCard>
					<ProjectCardHeader url="https://github.com/Kanahora/dishora" image="images/dishora.png"> Dishora </ProjectCardHeader>
					<ProjectCardArticle author="discord.js - Typescript">
						Dishora is a discord.js framework which significantly accelerates the process of creating custom Discord Bots for my Fiverr clients.
					</ProjectCardArticle>
				</ProjectCard>
				<ProjectCard>
					<ProjectCardHeader url="https://github.com/Kanahora/Dains" image="images/dains.png"> Dain's </ProjectCardHeader>
					<ProjectCardArticle author="Flask - Python">
						Dain's is an online food delivery platform. I was responsible for the theme design, home page, menu interface, and checkout process. Be sure to download from the remake branch instead of main.
					</ProjectCardArticle>
				</ProjectCard>
				<ProjectCard>
					<ProjectCardHeader url="https://github.com/callmeglenn/ITApp-Project" image="images/bob.png"> Bob </ProjectCardHeader>
					<ProjectCardArticle author="Scratch">
						A nifty 3D platformer I've created using Scratch, a language meant for 2D. Game engine and level design written by me. Download 3DEngineProject_13.sb3 and run it on the Scratch website to play.
					</ProjectCardArticle>
				</ProjectCard>
				<ProjectCard>
					<ProjectCardHeader url="https://github.com/callmeglenn/Pawfee-Beans" image="images/pawfee.png"> Pawfee Beans </ProjectCardHeader>
					<ProjectCardArticle author="HTML5 - CSS3">
						A cozy online corner I've crafted all on my own for a busting cat café. This site lets you peek at our adorable feline friends and even shop for cat goodies.
					</ProjectCardArticle>
				</ProjectCard>
			</div>
		</SectionWrapper>
	)
}
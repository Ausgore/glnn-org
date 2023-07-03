import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MediaNavItem from "./components/MediaNavItem";
import MediaNavItems from "./components/MediaNavItems";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export default function MediaNav() {
	return (
		<nav className="backdrop-blur-sm sticky top-0 w-screen py-8 pr-6 z-40">
			<MediaNavItems>
				<MediaNavItem icon={faLinkedin} url="https://www.linkedin.com/in/glenn-marcell-tjandra-a13529281/" />
				<MediaNavItem icon={faGithub} url="https://github.com/ausgore" delay={0.3}/>
				<MediaNavItem icon={faFilePdf} url="https://drive.google.com/file/d/1dQNXMotMHoI8ekfgLmkB6XRpSzj2Uqf2/view?usp=sharing" delay={0.6}/>
			</MediaNavItems>
		</nav>
	);
}
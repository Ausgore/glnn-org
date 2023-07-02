import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import AboutBody from './components/AboutBody';
import AboutImage from "./components/AboutImage";
import AboutDescription from "./components/AboutDescription";
import ViewResumeButton from "./components/ViewResumeButton";

export default function About() {
	return (
		<SectionWrapper id="about" className="pt-[8rem]">
			{/* Header */}
			<SectionHeader>About</SectionHeader>
			<AboutBody>
				<AboutDescription>
					<p> I am a Nanyang Polytechnic student studying under the Diploma of Information Technology. </p>
					<p className="mt-4"> I possess a vibrant imagination and innate creativity, nurtured by early exposure to drawing and programming. Throughout my life, I have effortlessly adapted to various social circles, assuming leadership roles in numerous projects. Not only do I excel at guiding my peers, but I also possess the unique ability to infuse energy and liveliness into any environment I enter. </p>
					<p className="mt-4"> C# was the first programming language I was exposed to, but I only became really invested in coding when I tried learning Nodejs to create Discord Bots back in 2017. </p>
					<p className="mt-4"> I started marketing my software skills on <a className="text-[#1dbf73] font-bold cursor-pointer hover:text-[#23e48a]" target="_blank" href="https://www.fiverr.com/glenn_mt">Fiverr</a> in 2020, and this has taught me the importance of making code that is easy to understand and modify. Since then, I have successfully fulfilled 150+ orders, earning a stellar reputation reflected in my impressive track record of 100+ 5-star reviews.  </p>
					<ViewResumeButton />
				</AboutDescription>
				<AboutImage footer="Click me to view my Fiverr page" />
			</AboutBody>
		</SectionWrapper>
	)
}
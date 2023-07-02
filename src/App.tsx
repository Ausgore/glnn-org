import NavBar from './components/MainNav';
import MediaNav from './components/MediaNav/MediaNav';
import Main from './components/Sections/Main';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects/Projects';
import Contact from './components/Sections/Contact/Contact';
import Skills from './components/Sections/Skills/Skills';
import Blob from './components/Blob';
import { useEffect } from 'react';

export default function App() {
	useEffect(function() {
		const hash = window.location.hash;
		if (hash) {
			const id = hash.substring(1);
			const element = document.getElementById(id);
			if (element) element.scrollIntoView();
		}
	}, []);

	return (
		<NavBar>
			<Blob />
			<main className="z-10">
				<MediaNav />
				{/* Sections */}
				<div className="ml-[4.5rem]">
					<Main />
					<About />
					<Skills />
					<Projects />
					<Contact />
				</div>
			</main>
		</NavBar>
	);
}
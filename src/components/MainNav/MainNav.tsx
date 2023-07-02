import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import MainNavIcon from './components/MainNavIcon';
import MainNavItems from './components/MainNavItems';
import MainNavItem from './components/MainNavItem';
interface NavBarProps {
	children: ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
	return (
		<div className="flex flex-col w-screen z-20">
			<motion.nav
				initial={{ x: -100 }}
				animate={{ x: 0 }}
				transition={{ ease: "easeOut", duration: 0.8 }}
				className="fixed h-full z-30"
				style={{ backgroundColor: "#080808" }}
			>
				<MainNavIcon />
				<MainNavItems>
					<MainNavItem scrollTo="about"> About </MainNavItem>
					<MainNavItem scrollTo="skills"> Skills </MainNavItem>
					<MainNavItem scrollTo="projects"> Projects </MainNavItem>
					<MainNavItem scrollTo="contact"> Contact </MainNavItem>
				</MainNavItems>
			</motion.nav>
			{children}
		</div>
	)
}
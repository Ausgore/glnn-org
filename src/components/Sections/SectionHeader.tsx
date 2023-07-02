import { ReactNode } from 'react';
interface SectionHeaderProps {
	children: ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
	return (
		<header className="flex items-center justify-center flex-row mb-12">
			<div className="font-black text-5xl md:text-6xl mr-4">{children}<span className="text-red-400">.</span></div>
			<div className="border-b-2 border-[#535355] border-solid flex-1" />
		</header>
	);
}
import { ReactNode } from 'react';

interface SectionProps {
	id: string;
	children: ReactNode;
	className?: string;
}

export default function SectionWrapper({ id, children, className }: SectionProps) {
	return (
		<section id={id} className={`m-auto max-w-[1150px] px-6 md:px-24 lg:px-24 xl:px-[7rem] ${className}`}>
			{children}
		</section>
	);
}
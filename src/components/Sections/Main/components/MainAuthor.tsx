import { ReactNode } from 'react';

interface MainAuthorProps {
	children: ReactNode;
}

export default function MainAuthor({ children }: MainAuthorProps) {
	return <h2 className="pt-6 text-4xl md:text-5xl font-light leading-snug"> {children} </h2>;
}
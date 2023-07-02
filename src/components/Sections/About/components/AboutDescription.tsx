import { ReactNode } from 'react';
interface AboutDescriptionProps {
	children?: ReactNode;
}

export default function AboutDescription({ children }: AboutDescriptionProps) {
	return <article className="mr-2 h-full text-md md:text-lg rounded-md col-span-2 lg:col-span-1 font-extralight"> {children} </article>;
}
import { ReactNode } from 'react';

interface PsuedoProps {
	children: ReactNode;
	className?: string;
}

export default function Psuedo({ children, className }: PsuedoProps) {
	return <p className={`italic text-gray-500 text-md md:text-xl ${className}`}> {children} </p>;
}
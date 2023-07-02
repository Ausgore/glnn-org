import { ReactNode } from 'react';

interface MainNavItemsProps {
	children: ReactNode;
}

export default function MainNavItems({ children }: MainNavItemsProps) {
	return <div className="flex flex-col"> {children} </div>
}
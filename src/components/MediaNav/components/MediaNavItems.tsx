import { ReactNode } from 'react';

interface MediaNavItems {
	children: ReactNode;
}

export default function MediaNavItems({ children }: MediaNavItems) {
	return <div className="flex flex-row justify-end"> {children} </div>;
}
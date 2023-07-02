import { ReactNode } from 'react';
interface ArticleHeaderProps {
	children: ReactNode;
}

export default function ArticleHeader({ children }: ArticleHeaderProps) {
	return <h1 className="bg-[#24080844] text-center align-middle p-4 font-light mb-4 md:text-xl"> {children} </h1>;
}
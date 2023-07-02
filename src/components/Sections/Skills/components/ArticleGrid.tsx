import { ReactNode } from 'react';
interface ArticleGridProps {
	children?: ReactNode;
}

export default function ArticleGrid({ children }: ArticleGridProps) {
	return <div className={`grid grid-cols-6 md:grid-cols-7 lg:grid-cols-3`}> {children} </div>;
}
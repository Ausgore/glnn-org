import { ReactNode } from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleGrid from './ArticleGrid';

interface SkillsArticleProps {
	title: string;
	children?: ReactNode;
}


export default function SkillsArticle(props: SkillsArticleProps) {
	return (
		<article className="m-4">
			<ArticleHeader> {props.title} </ArticleHeader>
			<ArticleGrid> {props.children} </ArticleGrid>
		</article>
	);
}
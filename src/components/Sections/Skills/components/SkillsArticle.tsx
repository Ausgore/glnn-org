import ArticleHeader from './ArticleHeader';
import ArticleGrid from './ArticleGrid';

interface SkillsArticleProps {
	title: string;
	logos: string[];
}


export default function SkillsArticle(props: SkillsArticleProps) {
	return (
		<article className="m-4">
			<ArticleHeader> {props.title} </ArticleHeader>
			<ArticleGrid> {props.logos.map(logo => <img src={`https://cdn.simpleicons.org/${logo}`} className="m-2" />)} </ArticleGrid>
		</article>
	);
}
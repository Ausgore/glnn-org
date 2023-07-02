import { ReactNode } from "react";

interface ProjectCardArticleProps {
	author: string;
	children: ReactNode;
}

export default function ProjectCardArticle(props: ProjectCardArticleProps) {
	return (
		<article>
			<h2 className="font-semibold text-red-400"> {props.author} </h2>
			<p className="mt-2 font-extralight text-lg"> {props.children} </p>
		</article>
	);
}
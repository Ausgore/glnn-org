export default function MainNavIcon() {
	function handleClick() {
		window.history.pushState({}, "", "#");
		const root = document.getElementById('root');
		root?.scrollTo({ top:0, left: 0 });
	}

	return (
		<div className="justify-center text-center mt-6 mb-8 mx-2 cursor-pointer" onClick={handleClick}>
			<a className="font-extrabold text-2xl py-1 px-2 rounded bg-gray-900" style={{ backgroundColor: "#111111" }}> G<span className="text-red-400">.</span> </a>
		</div>
	);
}
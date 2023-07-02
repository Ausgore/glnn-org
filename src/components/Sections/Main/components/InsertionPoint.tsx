import { useState, useEffect } from 'react';

export default function InsertionPoint() {
	const [isInsertionPointHidden, setIsInsertionPointHidden] = useState(false);
	useEffect(function () {
		const interval = setInterval(() => setIsInsertionPointHidden(!isInsertionPointHidden), 530);
		return () => clearInterval(interval);
	})

	return <span className="text-center text-red-400"> {isInsertionPointHidden ? "" : "|"} </span>;
}
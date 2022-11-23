import { useState, useEffect } from "react";
import './../App.css';

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let timer = setTimeout(() => {
			setCount((count) => count + 1);
			console.log('setTimeout called');
		}, 1000);

		return () => {
			clearTimeout(timer);
			console.log('clearTimeout called');
		}
	}, []);

	return (
		<>
			<h1>I've rendered {count} times!</h1>
		</>
	)
}

export default App;
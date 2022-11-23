import { useState } from "react";
import './../App.css';
function App() {
	const [member, setMember] = useState("홍길동");

	return (
		<>
			<h1>{`안녕하세요~~${member}님!!`}</h1>
			<Child member={member} />
		</>
	);
}

function Child({ member }) {
	return (
		<>
			<h1>Child</h1>
			<GrandChild member={member} />
		</>
	);
}

function GrandChild({ member }) {
	return (
		<>
			<h1>GrandChild</h1>
			<h2>{`${member}님~~또 뵙네요.^^`}</h2>
		</>
	);
}

export default App;
import { useState } from "react";
import { createContext } from "react";
import { useContext  } from "react";
import './../App.css';

const MyCtx = createContext();

function App() {
	const [member, setMember] = useState("김철수");

	return (
		<MyCtx.Provider value={member}>
			<h1>{`안녕하세요~~${member}님!!`}</h1>
			<Child/>
		</MyCtx.Provider>
	);
}

function Child() {
	return (
		<>
			<h1>Child</h1>
			<GrandChild/>
		</>
	);
}

function GrandChild() {
	const data = useContext(MyCtx);
	
	return (
		<>
			<h1>GrandChild</h1>
			<h2>{`${data}님~~또 뵙네요.^^`}</h2>
		</>
	);
}

export default App;
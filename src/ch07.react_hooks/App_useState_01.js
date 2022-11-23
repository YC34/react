import { useState } from "react";
import './../App.css';

function App() {
	const [rcolor, setRColor] = useState("red");
	const [bcolor, setBColor] = useState("blue");

	return (
		<>
			<h1>My favorite color is {rcolor}!</h1>
			<font color={rcolor}><b>글자 색상</b></font>
			<br/><br/>
			<button type="button" onClick={() => {
				if(rcolor=="blue"){
					setRColor("red");
					setBColor("blue");
				}else{
					setRColor("blue");	
					setBColor("red");
				}
			}}>
				클릭시 {bcolor}로 변경
			</button>
		</>
	)
}

export default App;
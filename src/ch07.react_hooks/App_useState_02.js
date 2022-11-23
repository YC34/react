import { useState } from "react";
import './../App.css';

function App() {
	const [model, setModel] = useState("sonata");
	const [year, setYear] = useState(2021);
	const [color, setColor] = useState("black");	
	
	const ChangeTest = (evt) => {
		var mycolor = evt.target.value;    
		console.log('param : '+ mycolor);
		setColor(mycolor);
	}	

	return (
		<>
			<h1>내 차 정보</h1>
			<p>
				{color} 색상의 {year}년산 {model} 모델
			</p>
			색상 변경 : &nbsp;
			<select onChange={ChangeTest}>
					<option value="노랑">yellow</option>
					<option value="파랑">blue</option>
					<option value="빨강">red</option>
					<option value="녹색">green</option>
			</select>
		</>
	)
}

export default App;

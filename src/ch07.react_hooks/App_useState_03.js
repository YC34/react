import { useState } from "react";
import './../App.css';

function App() {
	const [car, setCar] = useState({
		model: "sonata",
		year: 2021,
		color: "black"
	});	

	return (
		<>
			<h1>내 차 정보</h1>
			<table border='1'>
			<tbody>
				<tr>
					<td>모델</td>
					<td>{car.model}</td>
				</tr>
				<tr>
					<td>년산</td>
					<td>{car.year}</td>
				</tr>				
				<tr>
					<td>색상</td>
					<td>{car.color}</td>
				</tr>
			</tbody>
			</table>
			<br/><br/>
			<button type="button" onClick={() => setCar({...car, model:"그랜저"})}>
				전개 연산자 사용
			</button>
			&nbsp;&nbsp;
			<button type="button" onClick={() => setCar({model:"그랜저"})}>
				미사용
			</button>
		</>
	)
}

export default App;

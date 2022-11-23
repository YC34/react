import {useState} from "react";
import Mart from "./noUseComponents/MartNo";

const initialItems = {
	man: [
		{name: "셔츠", price: "58000"},
		{name: "청바지", price: "70000"},
	],
	woman: [
		{name: "블라우스", price: "200000"},
		{name: "원피스", price: "100000"},
	]
};

function App() {
	const [array, setArray] = useState(initialItems);
	const [mode, setMode] = useState('L'); /* L(엘마트) H(에이치마트) */

	const doAddData = (newMan) => {
		setArray({...array, man: [...array.man, newMan]});
		console.log(newMan.name + "이(가) 추가되었습니다.");
	};
	// console.log('App Component');
	// console.log(array);
	
	const MartSelection = (evt) => {
		var myvalue = evt.target.value;
		if(myvalue==='L'){
			setMode('L');	
		}else if(myvalue==='H'){
			setMode('H');
		}
	}

	return(	
		<div style={{position: "absolute", top: "5%", left: "5%"}}>
			<h1>마트 유형 선택 :</h1>&nbsp; 
			<select onChange={MartSelection}>
				<option value="L">엘마트</option>
				<option value="H">에이치마트</option> 
			</select>
			<Mart mode={mode} items={array} pushData={doAddData} />
		</div>
	);
}

export default App;
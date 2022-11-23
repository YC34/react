import {useContext} from "react";
import {AppContext} from "../App_useContext_03Yes";

function LMartFashion({floor}) {
	// console.log('Fashion5F Component');
	// console.log(items);
		
	const {items, doAddData} = useContext(AppContext);
	
	const newMan = {name: "세미 정장", price: "123000"};
	
	return (
		<div>
			<h3>L 패션관 {floor}층</h3>
			<div>
				<h3>남성복</h3>
				<ol>
				{items.man.map((item, index) => {
					return (
						<li key={index}>
							{item.name} : {item.price}원
						</li>
					);
				})}
				</ol>
				<br/>
				<button onClick={() => doAddData(newMan)}>남성복 품목 추가</button>
			</div>

			<div>
				<h3>여성복</h3>
				<ul>
				{items.man.map((item, index) => {
					return (
						<li key={index}>
							{item.name} : {item.price}원
						</li>
					);
				})}
				</ul>
			</div>
		</div>
	);
}

export default LMartFashion;
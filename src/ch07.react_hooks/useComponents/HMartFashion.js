import {useContext} from "react";
import {AppContext} from "../App_useContext_03Yes";

function HMartFashion({floor}) {
	// console.log('Fashion5F Component');
	// console.log(items);
	
	const {items, doAddData} = useContext(AppContext);	
	
	const newMan = {name: "세미 정장", price: "123000"};
	
	return (
		<div>
			<h3>H 패션관 {floor}층</h3>
			<div>
				<h3>남성복</h3>
				<table border="1">
					<thead>
						<tr>
							<td>이름</td>
							<td>가격</td>
						</tr>
					</thead>
					<tbody>
					{
						items.man.map((item, index) => (					
							<tr key={item.name}>
								<td>{item.name}</td>
								<td>{item.price}</td>
							</tr>					
						))				
					}
					</tbody>
				</table>				

				<br/>
				<button onClick={() => doAddData(newMan)}>남성복 품목 추가</button>
			</div>

			<div>
				<h3>여성복</h3>
				<table border="1">
					<thead>
						<tr>
							<td>이름</td>
							<td>가격</td>
						</tr>
					</thead>
					<tbody>
					{
						items.woman.map((item, index) => (					
							<tr key={item.name}>
								<td>{item.name}</td>
								<td>{item.price}</td>
							</tr>					
						))				
					}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default HMartFashion;
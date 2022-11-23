import HMartFashion from "./HMartFashionNo";

function HFashion({floor, items, pushData}) {
	// console.log('HFashion Component');
	// console.log(items);
	return (
		<div>
			<h3>H 마트</h3>		
			<HMartFashion floor={floor} items={items} pushData={pushData} />
		</div>
	);
}

export default HFashion;
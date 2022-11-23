import LMartFashion from "./LMartFashionNo";

function LFashion({floor, items, pushData}) {
	// console.log('LFashion Component');
	// console.log(items);
	return (
		<div>
			<h3>L 마트</h3>
			<LMartFashion floor={floor} items={items} pushData={pushData} />
		</div>
	);
}

export default LFashion;
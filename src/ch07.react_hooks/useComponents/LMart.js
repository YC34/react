import LMartFashion from "./LMartFashion";

function LFashion({floor}) {
	// console.log('LFashion Component');
	// console.log(items);
	return (
		<div>
			<h3>L 마트</h3>
			<LMartFashion floor={floor}/>
		</div>
	);
}

export default LFashion;
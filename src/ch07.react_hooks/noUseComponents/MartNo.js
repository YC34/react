import LFashion from "./LMartNo";
import HFashion from "./HMartNo";

function Mart({mode, items, pushData}) {
	// console.log('Mart Component');
	// console.log(mode);
	//console.log(items);
	
	var gotoPage = null ;
	if(mode==='L'){/* floor은 해당 매장의 층수 */
		gotoPage = <LFashion floor={3} items={items} pushData={pushData} /> ;
	}else if(mode==='H'){
		gotoPage = <HFashion floor={5} items={items} pushData={pushData} /> ;
	}
	
	return (
		<div>		
			{gotoPage}
		</div>
	);
}

export default Mart;
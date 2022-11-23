import LFashion from "./LMart";
import HFashion from "./HMart";

function Mart({mode}) {
	// console.log('Mart Component');
	// console.log(mode);
	//console.log(items);
	
	var gotoPage = null ;
	if(mode==='L'){/* floor은 해당 매장의 층수 */
		gotoPage = <LFashion floor={3}/> ;
	}else if(mode==='H'){
		gotoPage = <HFashion floor={5}/> ;
	}
	
	return (
		<div>		
			{gotoPage}
		</div>
	);
}

export default Mart;
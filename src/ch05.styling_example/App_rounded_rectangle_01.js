	
import styled from 'styled-components';

const RoundedRectangle = styled.div`
   position:absolute;
   left:10px;
   top:10px;
   width:50px;
   height:30px;
   background:blue;
   border-radius:10%;				

`;

function App() {
	return (
		<RoundedRectangle/>
	);	
}

export default App;

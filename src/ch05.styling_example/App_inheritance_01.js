import styled from 'styled-components';

const AppBlock =styled.div`
	width:300px;
	margin: 0 auto; margin-top: 1rem;
	border: 1px dashed brown;
	padding: 1rem;

`;

const Basic =styled.div`
	width:120px;
	height:20px; 
	margin-top: 30px; 
	border: 1px solid black;

`;
const ShadowBasic =styled(Basic)`
	box-shadow: 2px 4px 8px;

`;
const RoundedBasic =styled(Basic)`
	border-radius:10px;

`;

function App(){
	return (
    	<AppBlock>
			<Basic>안녕하세요</Basic>
	        <ShadowBasic>안녕하세요</ShadowBasic>
			<RoundedBasic>안녕하세요</RoundedBasic>
        </AppBlock>
    )
}
export default App ;

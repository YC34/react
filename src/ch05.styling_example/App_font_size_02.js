import styled from 'styled-components';

/* 화살표 함수 : (argument) => { statements } */
const TitleFontScale = styled.h2`
	font-size: ${(props)=> props.fontSize} ;
	color : ${(props)=>props.color};
	font-weight: 600;
`;

function App(){
	return (
    	<>
        	<TitleFontScale fontSize="60px" color="blue">큰 글자</TitleFontScale>
            <TitleFontScale fontSize="20px">중간 크기 글자</TitleFontScale>
        </>
    )
}
export default App ;

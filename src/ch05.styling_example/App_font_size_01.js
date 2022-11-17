import styled from 'styled-components';

const BigFont = styled.h2`
	font-size: 30px;
	font-weight: 600;
`

const MediumFont = styled.h2`
	font-size: 20px;
	font-weight: 600;
`

function App(){
	return (
    	<section>
        	<BigFont>큰 글자</BigFont>
            <MediumFont>중간 크기 글자</MediumFont>
        </section>
    )
}
export default App ;

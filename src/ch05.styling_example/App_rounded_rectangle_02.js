import styled from 'styled-components';
import {css} from 'styled-components';

// 마치 if 조건문을 사용하는 것과 유사합니다.
// background 속성이 입력 되면, 해당 색상으로 아니면, 검정색으로 보여 줍니다.
// huge 속성이 입력 되면 크게, 아니면 기본 크기로 보여 줍니다.

// 기호 ||는 "~되어 있지 않으면"으로 해석
// 기호 &&는 "~되어 있으면"으로 해석

// props.background || 'black'는
// background가 입력이 되지 않으면, 'black'으로 설정해주세요.

const RoundedRectalgle = styled.div`
	/*position:absolute;*/
	left:10px;
	top:10px;
	width:30px;
	height:30px;
	background: ${props => props.background || 'black'};
	border-radius:10%;
	${props => props.huge && css` width:50px;height:50px;border-radius:20%;`}
`;

function App(){
	return(
		<table>
			<tr>
				<td><RoundedRectalgle background="blue" huge/></td>
				<td><RoundedRectalgle huge/></td>
				<td><RoundedRectalgle background="red"/></td>
			</tr>
		</table>
	);
}
export default App ;


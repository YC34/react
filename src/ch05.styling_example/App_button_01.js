import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	/* 공통 스타일 */
	display: inline-flex;
	outline: none;
	border: none;
	border-radius: 4px;

	/* color: white; */
	color: ${props => props.color || 'white'};
	font-weight: bold;
	cursor: pointer;
	padding-left: 1rem;
	padding-top: 0.5rem; // 신규 추가됨
	padding-right: 1rem;

	/* 크기 */
	height: 2.25rem;
	font-size: 1rem;

	/* 색상 */
	/* background: #228be6; */
	/* || 연산자는 추출할 요소가 없을 때 기본 값을 지정해 줍니다.*/
	background: ${props => props.background || 'yellow'};

	/* hover는 mousein + mouseout */
	&:hover {
		background: green;
	}

	/* active는 마우스 클릭되었을 때 ... */
	&:active {
		background: red;
	}

	/* 기타 */
	& + & {
	margin-left: 1rem;
	}
`;

/* children은 예약된 키워드이고, prop_list은 임의의 이름이어도 상관 없습니다. */
function Button({ children, ...prop_list }) {
	// children는 넘어 오는 문자열입니다. (예시 : 버튼(Button))
	console.log('넘어 오는 문자열 : ' + children);

	// prop_list는 prop 목록을 의미합니다.
	console.log(JSON.stringify(prop_list));

	//" 확인"이라는 글자가 보여야 하고, prop_list 속성이 적용이 되어야 합니다.
	return <StyledButton {...prop_list}>{children}</StyledButton>;
}

export default Button;

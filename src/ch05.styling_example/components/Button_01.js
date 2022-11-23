
import styled from 'styled-components';

const StyledButton = styled.button``;

// children는 예약어, 하위 요소를 의미합니다.
// prop_list는 임의의 이름으로 작성해도 되며, 프로퍼티의 목록이 됩니다.
function Button({children,...prop_list}) {
	console.log(children);
	console.log(JSON.stringify(prop_list));
	return (

		<>
			<StyledButton>{children}</StyledButton>
		</>

	);
	

}



export default Button;

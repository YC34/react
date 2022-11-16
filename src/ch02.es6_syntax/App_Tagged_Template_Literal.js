import React from 'react'
// import styled from 'styled-components'

function App(){
	const name = '홍길동';
	const hello = `안녕하세요~~ ${name}님`;
	console.log(hello);

	// 객체
	const object = { name: '김철수' };
	const text = `${object}`
	console.log(text);

	// 함수
	const fn = () => true
	const msg = `${fn}`;
	console.log(msg);

	// 만약에, 우리가 Template Literal 을 사용하면서도, 그 내부에 넣은 자바스크립트 값을 조회하고 싶을 땐 Tagged Template Literal 문법을 사용 할 수 있습니다.

	const red = '빨간색';
	const blue = '파란색';
	function favoriteColors01(texts, ...values) {
		console.log(texts);
		console.log(values);
	}
	console.log('favoriteColors01 함수 호출');
	favoriteColors01`제가 좋아하는 색은 ${red}과 ${blue}입니다.`

	function favoriteColors02(texts, ...values) {
		return texts.reduce((result, text, i) => `${result}${text}${values[i] ? `<b>${values[i]}</b>` : ''}`, '');
	}
	console.log('favoriteColors02 함수 호출');
	var result = favoriteColors02`제가 좋아하는 색은 ${red}과 ${blue}입니다.`
	console.log(result);

	// const StyledDiv = styled.div`
	//   background: ${props => props.color};
	// `;

	function sample(texts, ...fns) {
  	const mockProps = {
  		title: '제목창',
  		body: '문장의 본문 내용입니다.'
  		};
		return texts.reduce((result, text, i) =>
        `${result}${text}${fns[i] ? fns[i](mockProps) : ''}`,
      '');
	}

	result = sample`
		제목: ${props => props.title}
		내용: ${props => props.body}
	`
	console.log(result);

	return(
		<div>
			Hello ReactJS~~
		</div>
	);
}

export default App ;

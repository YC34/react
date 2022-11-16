function App() {
	const array = [1, 2, 3];

	// square를 변화 함수라고 합니다.
	const square = n => 2 * n;

	// 배열이름.map(변화함수);
	const squared = array.map(square);
	console.log(squared); // squared는 새로운 배열임

	const humans = ['김유신', '이순신', '강감찬', '신사임당'];

	console.log('map 함수 사용하기');
	const result = humans.map(one => '안녕하세요~~' + one + '님');
	console.log(result); // result는 새로운 배열임
	
	const words = [
		'love',
		'peace',
		'authentication',
		'sea'
	];
	console.log('각 단어들의 길이 표시(화살표 함수 사용)');
	console.log(words.map(one => one.length));

	//	글자 길이가 10글자 이하인 항목만 배열에 추가(push 함수 사용하기)
	var arr =[]; 	/* empty array */
	words.map(one=> {
		if(one.length<=4){
			arr.push(one);	
		}
	});



	console.log(arr);




	return (
		<div className="App">
			안녕하세요.
		</div>
	);
}

export default App;

function App() {
	var func01 = () => {
		return 'hello~~everyone';
	};
	console.log('\n매개 변수 없슴');
	console.log('func01() : ' + func01());	

	var func02 = (name) => {
		return 'hello~~' + name + '님' ;
	};
	console.log('\n매개 변수 1개');
	console.log("func02('홍길동') : " + func02('홍길동'));	
	
	var func03 = (first, second) => {
		return first + second;
	};
	console.log('\n매개 변수 2개');
	console.log('func03(14, 5) : ' + func03(14, 5));

	console.log('\nreturn 구문을 사용하지 않고 1줄로 작성하는 방식');
	var func04 = (first, second) => first + second ;
	console.log('func04(10, 20) : ' + func04(10, 20));

	console.log('\n반환 값이 객체인 경우');
	// ['add'] : 대괄호와 키 이름을 이용하여 접근합니다.
	var func05 = (first, second) => ({add:first + second, mul:first * second}) ;
	console.log('func05(14, 5)[\'덧셈\'] : ' + func05(14, 5)['add']);
	console.log('func05(14, 5)[\'곱셈\'] : ' + func05(14, 5)['mul']);

	return (
		<div className="App">안녕하세요.</div>
	);
}

export default App;

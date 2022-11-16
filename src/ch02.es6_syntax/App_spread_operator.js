
function App() {
	console.log('ES5 방식의 코딩 방법');
	console.log('배열 요소 합치기');
	var arr01 = ['김유신', '이순신'];
	var arr02 = ['강감찬', '을지문덕'];
	var merge01 = [arr01[0], arr01[1], arr02[0], arr02[1]];
	var merge02 = arr01.concat(arr02);
	var merge03 = [].concat(arr01, arr02);
	console.log('merge01 : ' + merge01);
	console.log('merge02 : ' + merge02);
	console.log('merge03 : ' + merge03);

	console.log('배열 슬라이싱');
	var slice01 = arr01[0];
	var slice02 = arr01[1];
	console.log('|| 연산자는 추출할 요소가 없을 때 기본 값을 지정해 줍니다.');
	// arr01[2] 요소는 undefined입니다.
	var slice03 = arr01[2] || '김구';
	console.log('slice01 : ' + slice01);
	console.log('slice02 : ' + slice02);
	console.log('slice03 : ' + slice03);

	console.log('ES6 방식의 코딩 방법');
	var arr03 = ['유관순', '신사임당'];
	var arr04 = ['이이', '이황'];

	console.log('전개 연산자(... 기호)는 배열의 요소를 쭈욱 나열 시키는 역할');
	var merge04 = [...arr03, ...arr04];
	console.log('merge04 : ' + merge04);

	var arr05 = ['갑', '을', '병', '정', '무', '기'];
	var [item01, item02, item03 = 'empty', ...others] = arr05;
	console.log('item01 : ' + item01);
	console.log('item03 : ' + item02);
	console.log('item03 : ' + item03);
	console.log('others : ' + others);

    function func01(args){  // 함수 정의
        var [first, second, ...others] = args ;
        console.log('first : ' + first);
        console.log('second : ' + second);
        console.log('others : ' + others);
    }
    func01(arr05) ; // 함수 호출

    const myCar = {
      brand: '현대',
      model: '소나타',
      color: 'black'
    }
    
    const myNewCar = {
      type: 'car',
      year: 2021, 
      color: 'white'
    }
    
    const myCarInfo = {...myCar, ...myNewCar}   ;
    console.log(myCarInfo);

  return (
    <div className="App">
      안녕하세요.
    </div>
  );
}

export default App;

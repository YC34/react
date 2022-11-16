import './App.css';

function App() {
	console.log('ES5 방식의 코딩 방법');
	var members = ['김유신', '이순신'];
	var element01 = members[0];
	var element02 = members[1];

	console.log('|| 연산자를 사용하여 해당 인덱스가 없는 경우 기본값을 지정합니다.');
	var element03 = members[2] || '윤봉길';
	console.log('element01 : ' + element01);
	console.log('element02 : ' + element02);
	console.log('element03 : ' + element03);

	var temp = element02;
	element02= element01;
	element01 = temp;
	console.log('swapping 기법');
	console.log('element01 : ' + element01);
	console.log('element02 : ' + element02);

	var obj = {
		name: '강감찬',
		age: 30,
	};

	var name = obj.name; // 객체의 키를 변수에 할당
	var age = obj.age;

	// obj.address는 undefined입니다.
	var address = obj.address || '서울시 마포구 공덕동';
	var newname = name;
	console.log('name : ' + name);
	console.log('age : ' + age);
	console.log('address : ' + address);

	console.log('-----------------------------------');
	console.log('ES6 방식의 코딩 방법');
	var members02 = ['황진이', '신사임당']
	var [element04, element05, element06 = '유관순'] = members02;
	console.log('members02 : ' + members02);
	console.log('element04 : ' + element04);
	console.log('element05 : ' + element05);
	console.log('element06 : ' + element06);

  console.log('구조 분해를 사용한 대입')
	var obj2 = {
		name2: '이순신',
		age2: 60,
	};
	const {name2, age2} = obj2;	
	console.log('name2 : ' + name2);
	console.log('age2 : ' + age2);


	console.log('swapping 기법');
	[element04, element05] = [element05, element04];
	console.log('members02 : ' + members02);
	console.log('element04 : ' + element04);
	console.log('element05 : ' + element05);
	console.log('element06 : ' + element06);

	console.log('...는 전개 연산자')
	var [onehuman, ...humans] = ['김유신', '이순신', '강감찬', '신사임당'];
	console.log('onehuman : ' + onehuman);
	console.log('humans : ' + humans);

	var {...humaninfo } = { name: '강감찬', age: 30, address : '강남구 역삼동' };
	console.log('humaninfo[\'name\'] : ' + humaninfo['name']);
	console.log('humaninfo[\'age\'] : ' + humaninfo['age']);
	console.log('humaninfo[\'address\'] : ' + humaninfo['address']);
	// humaninfo['gender']는 undefined입니다.
	console.log('humaninfo[\'gender\'] : ' + humaninfo['gender']);

  return (
    <div className="App">
      안녕하세요.
    </div>
  );
}

export default App;

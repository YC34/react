import './App.css';

function App() {
  console.log('ES5 방식의 코딩 방법');
  const qs = 'id=hong&salary=12345&hiredate=2021/06/25';

  // parseES5 함수는 for 반복문과 split() 함수를 사용하여 반환해 줍니다.
  function parseES5(qs) {
    var tokens = qs.split('&');
    var result = {};
    for(var i = 0; i < tokens.length; i++) {
      var subtoken = tokens[i].split('=');
      var key = subtoken[0];
	  
	  // 숫자형이면 숫자로, 아니면 문자열 형식으로 변형합니다.
      var value = Number.isNaN(Number(subtoken[1])) ? subtoken[1] : Number(subtoken[1]);
      result[key] = value;
    }
    return result;
  }

  const params05 = parseES5(qs);
  console.log(params05);

  console.log('ES6 방식의 코딩 방법(forEach)');
  // forEach 구문을 사용하는 방식입니다.
  function parseForeach(qs) {
    const tokens = qs.split('&');
    let result = {};
    tokens.forEach((onetoken) => { // onetoken는 토큰 한 개를 의미
      const [ key, value ] = onetoken.split('=');
      result[key] = value;
    });
    return result;
  }

  const params06 = parseForeach(qs);
  console.log(params06);

  function parseMap(qs) {
    const tokens = qs.split('&');
    const result = tokens.map((onetoken) => {
      const [ key, value ] = onetoken.split('=');
      return { key: key, value: value };
    });
    return result;
  }

  console.log('ES6 방식의 코딩 방법(map)');
  const params07 = parseMap(qs);
  console.log(params07[0]);
  console.log(params07[1]);
  console.log(params07[2]);

  function sum(numbers) {
	// total 변수는 최종 결과를 저장할 변수, num은 배열 요소 각각을 의미 
    // 0은 total 변수의 초기 값을 의미합니다.	
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  var answer = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 55
  console.log(answer) ;
 
  // result 변수는 최종 결과를 저장할 변수로써, 초기 값은 {}입니다.
  // item 변수는 파라미터 이름과 값을 저장하고 있는 요소 1개를 의미합니다.
  function parse(qs) {
    const tokens = qs.split('&');
    return tokens
      .map((onetoken) => {
        const [ key, value ] = onetoken.split('=');
        return { key, value };
      })
      .reduce((result, item) => ({
        ...result,
        [item.key]: item.value,
      }), {});
  }
  console.log('ES6 방식의 코딩 방법(map and reduce)');
  const params08 = parse(qs);
  console.log(params08);

  return (
    <div className="App">
      안녕하세요.
    </div>
  );
}

export default App;

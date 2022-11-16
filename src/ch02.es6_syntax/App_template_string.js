
import './App.css';

function App() {
  // ES5 문법
  var string1 = 'hello';
  var string2 = 'world';
  var greeting = string1 + ' ' + string2;
  console.log(greeting);

  var product = { name: 'apple', price: '32000' };
  var message = '제품 : ' + product.name + ', 단가 : ' + product.price ;
  console.log(message);

  var multiLine = '문자열1\n문자열2';
  console.log(multiLine);

  var value1 = 14;
  var value2 = 5;
  var boolValue = false;
  var operator1 = '연산 결과 : ' + (value1 * value2) ;
  var operator2 = '불리언값은 ' + (boolValue ? '참' : '거짓') ;
  console.log(operator1);
  console.log(operator2);

  //ES6 문법
  greeting = `${string1} ${string2} 입니다.`
  console.log(greeting);

  product = { name: 'react', price: '32000' };
  message = `제품 : ${product.name}, 단가 : ${product.price}`;
  console.log(message);

  multiLine = `문자열1
  문자열2`;
  console.log(multiLine);

  operator1 = `연산 결과 : ${value1 * value2}`;
  operator2 = `불리언값은 ${boolValue ? '참' : '거짓'}입니다.`;
  console.log(operator1);
  console.log(operator2);

  return (
    <div className="App">
      안녕하세요.
    </div>
  );
}

export default App;

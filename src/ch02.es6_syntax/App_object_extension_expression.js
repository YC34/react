import './App.css';

function App() {
  console.log('ES5 방식의 코딩 방법');
  var name = '김철수'
  var korean = 60;
  var english = 80;

  var obj = { name:name, korean: korean, english: english};
  console.log(obj) ;

  var firstname = ' gildong';
  var combined = {}; // empty object
  combined['hong' + firstname] = '홍길동'; // setter
  console.log('combined : ' + combined);

  //  typeof ) primitive type 기본자료형
  //  instanceof ) array,object 
  console.log('typeof(combined) : ' + typeof(combined));
  console.log('JSON.stringify(combined) : ' + JSON.stringify(combined));
  console.log('combined[\'hong gildong\'] : ' + combined['hong gildong']); // getter

  var methodList = {
    sayHello: function(saram) { console.log('안녕하세요.' + saram + '님'); },
    goodLuck: function() { return '행운을 빌어요'; },
  };
  methodList.sayHello('김유신') ;
  console.log(methodList.goodLuck());

  console.log('----------------------')
  console.log('ES6 방식의 코딩 방법');
  console.log('키 이름을 생략하면 변수의 이름이 키의 이름으로 지정됩니다.')
  obj = { name, korean, english };
  console.log('obj : ' + obj) ;

  combined = {
    ['hong' + firstname]: '홍길동',
  };
  console.log('combined : ' + combined) ;
  console.log('객체에 함수 추가시 function 키워드를 사용하지 않아도 됨') ;
  methodList = {
    korean,
    sayHello(saram) { console.log('안녕하세요.' + saram + '님'); },
    goodLuck() { return '행운을 빌어요'; },
  };
  console.log('국어 점수 : ' + methodList.korean);
  methodList.sayHello('이순신') ;
  console.log(methodList.goodLuck());

  return (
    <div className="App">
      안녕하세요.
    </div>
  );
}

export default App;

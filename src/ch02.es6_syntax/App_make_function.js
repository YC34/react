import './App.css';

function App() {
  // 함수 만들기
  function jegob01(a, b) {
    return (a*a) + (b*b);
  }  
  console.log('jegob01(2, 3) 실행 결과 : ' + jegob01(2, 3));

  // 함수 표현식
  const jegob02 = function (a, b) {return a * a + b * b};
  console.log('jegob02(3, 4) 실행 결과 : ' + jegob02(3, 4));

  function myFunction01(x, y) {
    return x * y;
  }
  console.log('myFunction01(4) 실행 결과 : ' + myFunction01(4));
 
  function myFunction02(x, y = 2) {
    return x * y;
  }
  console.log('myFunction02(4) 실행 결과 : ' + myFunction02(4));

  return (
    <div className="App">
      안녕하세요.
    </div>
  );
}

export default App;

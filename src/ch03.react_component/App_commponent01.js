import {Component} from 'react';

class App extends Component{
  render(){
    return(
        <div>
          <div>클래스 방식 (초간단 JSX 실습)</div>
          <img src="http://localhost:3000/abcd.jpg" width="300" height="300"/>
          <div>반갑습니다.</div>

        </div>
      );
  }

}

// 클래스 이름과 동일해야 합니다.
export default App;
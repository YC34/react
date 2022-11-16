import {Component} from 'react';

//  Heading은 컴포넌트 이름 . Heading01은 파일 이
import Heading from './components/Heading01';
import Navigation from './components/Navigation01';
import Closing from './components/Closing01';
class App extends Component{
  render(){
    return(
        <div>
          <Heading greeting="인사말" hello="여러분 반가워"/>
          <Navigation member01="김유신" member02="이순신" member03="강감찬"/>
          <Closing closing="맺음말" comment="내일 또 봅시당."/>
        </div>
      );
  }

}

// 클래스 이름과 동일해야 합니다.
export default App;
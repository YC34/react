import {Component} from 'react';

import MemberList from './components/MemberList';
import Frutit from './components/Fruit'
class App extends Component{
  
  render(){
  
    return(
        <div>
          <MemberList/>
          <hr/>
          <Frutit/>
        </div>
      );
  }
}


// 클래스 이름과 동일해야 합니다.
export default App;
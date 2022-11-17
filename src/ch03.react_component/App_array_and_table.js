import {Component} from 'react';

import MemberList from './components/MemberList';

class App extends Component{
  
  render(){
  
    return(
        <div>
          <MemberList/>
          <hr/>
        </div>
      );
  }
}


// 클래스 이름과 동일해야 합니다.
export default App;
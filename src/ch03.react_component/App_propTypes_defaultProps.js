import {Component} from 'react';
import ChildComponent from './components/ChildComponent';


class App extends Component{
  render(){
    const arr=[10,20,30];
    const somenode=<font color='red'>하하하</font>;
    const myfunc = () => {console.log('호호호');}

    return(
        <ChildComponent 
          isCheck={true}
          salary={'ㅁㄴㅇㅁ'}
          members={{name:'',age:20}}
          address={'서울시 금천구 가산동'}
          array={arr}
          node={somenode}
          func={myfunc}
        />
      );
  }

}

// 클래스 이름과 동일해야 합니다.
export default App;
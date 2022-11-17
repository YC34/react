import {Component} from 'react';

import Heading from './components/Heading07';
import Navigation from './components/Navigation07';
import Closing from './components/Closing07';

class App extends Component{
  constructor(props){
      super(props);

      this.state={
        heading:{greeting:'good morning',hello:'hello~~everyone'},
        close:{closing:'끝맺음',comment:'잘 가세요.'},
        contents:[
            {id:1,title:'김유신',description:'신라의장군 '},
            {id:2,title:'이순신',description:'무찌르자~~일본군'},
            {id:3,title:'윤봉길',description:'도시락 폭탄'}

          ]
        
      }
  }

  render(){
    console.log('App render')
    return(
        <div>
          <Heading greeting={this.state.heading.greeting} hello={this.state.heading.hello}></Heading>

          <Navigation datalist={this.state.contents}></Navigation>
          
          <Closing closing={this.state.close.closing} comment={this.state.close.comment}></Closing>
        </div>
      );
  }
}


// 클래스 이름과 동일해야 합니다.
export default App;
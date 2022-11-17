import {Component} from 'react';

import Heading from './components/Heading07';
import Navigation from './components/Navigation07';
import Closing from './components/Closing07';

class App extends Component{
  constructor(props){
      super(props);
      /* 'hahaha' 'hohoho'*/
      this.state={
        mode:'hahaha',
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

    var _closing,_comment=null; //  임시 변수
    var _greeting,_hello=null; //  임시 변수
    if(this.state.mode==='hahaha'){

      _closing=this.state.close.closing;
      _comment=this.state.close.comment;
      _greeting=this.state.heading.greeting;
      _hello=this.state.heading.hello;

    }else if(this.state.mode==='hohoho') {
      
      _closing=this.state.contents[0].title;
      _comment=this.state.contents[0].description;

      _greeting='그래 왔늬?'
      _hello='어서와~'

    }



   


    return(
        <div>
          <Heading greeting={_greeting} hello={_hello}></Heading>

          <Navigation datalist={this.state.contents}></Navigation>
          
          <Closing closing={_closing} comment={_comment}></Closing>
        </div>
      );
  }
}


// 클래스 이름과 동일해야 합니다.
export default App;
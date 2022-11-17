import {Component} from 'react';

class Heading extends Component{
  render(){
    console.log('Heading render');
    return(
        <header>
          <h1>{this.props.greeting}</h1>
          {this.props.hello}
        </header>
      );
  }

}

// 클래스 이름과 동일해야 합니다.
export default Heading;
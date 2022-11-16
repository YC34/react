import {Component} from 'react';

class Closing extends Component{
  render(){
    return(
        <article>
          <h2>{this.props.closing}</h2>
          {this.props.comment}
        </article>
      );
  }

}

// 클래스 이름과 동일해야 합니다.
export default Closing;
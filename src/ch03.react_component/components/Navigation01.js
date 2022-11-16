import {Component} from 'react';

class Navigation extends Component{
  render(){
    return(
        <nav>
          <ul>
              <li><a href="1.html">{this.props.member01}</a></li>
              <li><a href="2.html">{this.props.member02}</a></li>
              <li><a href="3.html">{this.props.member03}</a></li>
          </ul>
        </nav>
      );
  }

}

// 클래스 이름과 동일해야 합니다.
export default Navigation;
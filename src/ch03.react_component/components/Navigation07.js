import {Component} from 'react';

class Navigation extends Component{
  render(){
    console.log('Navigation render');

    var datalist=this.props.datalist;
    var i = 0;
    var mylist=[];
    while(i<datalist.length){
      
      mylist.push(<li><a></a></li>);  
      i=i+1;


    }

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
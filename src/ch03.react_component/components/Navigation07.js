import {Component} from 'react';

class Navigation extends Component{
  render(){
    console.log('Navigation render');

    var datalist=this.props.datalist;
    var i = 0;
    var mylist=[];
    while(i<datalist.length){
      
      mylist.push(<li key={datalist[i].id}><a href={"/content/"+datalist[i].id}>{datalist[i].title}({datalist[i].description})</a></li>);

      i=i+1;


    }

    return(
        <nav>
          <ul>
            {mylist}
          </ul>
        </nav>
      );
  }

}

// 클래스 이름과 동일해야 합니다.
export default Navigation;
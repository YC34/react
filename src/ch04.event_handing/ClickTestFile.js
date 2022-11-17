import {Component} from 'react';

class ClickTestComponent extends Component{
  
  ClickTest=(param) =>{
    if(typeof param != 'string'){
        param='Click Another';
    }

    console.log('param : '+ param);

  }

  render(){
    return(
        <>
            <h2>클릭 이벤트</h2>
            <button onClick={e => this.ClickTest('Click Button')}>버튼 클릭</button>
            <div onClick={e => this.ClickTest('Click Div')}>div 클릭</div>
            <a onClick={this.ClickTest}>앵커 클릭(파라미터 없음)</a>
        </>
      );
  }

}

// 클래스 이름과 동일해야 합니다.
export default ClickTestComponent;
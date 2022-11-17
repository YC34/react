import {Component} from 'react';

class ChangeTestComponet extends Component{
  
  ChangeTest=(evt) =>{
    var myvalue=evt.target.value;
    console.log('myvalue : '+ myvalue);

  }

  render(){
    return(
        <>
            <h2>Change 이벤트</h2>
            <input type='text' onChange={this.ChangeTest}/>
            <br/>
            <select onChange={this.ChangeTestFile}>
              <option value='hello'>hello</option>
              <option value='world'>world</option>
              <option value='good'>good</option>
              <option value='morning'>morning</option>
            </select>
        </>
      );
  }

}

// 클래스 이름과 동일해야 합니다.
export default ChangeTestComponet;
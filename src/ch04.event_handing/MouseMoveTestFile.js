import {Component} from 'react';



// MouseOver MouseOut 등 많음.

class MouseMoveTestComponet extends Component{
  
  MouseMoveTest=(tag) =>{
    
    console.log('태그 이름 : '+ tag);

  }

  render(){
    return(
        <>
            <h2>MouseMove 이벤트</h2>
            <input type='text' onMouseMove={e => this.MouseMoveTest('input')}/>
            <br/>
            <select onMouseMove={e => this.MouseMoveTest('select')}>
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
export default MouseMoveTestComponet;
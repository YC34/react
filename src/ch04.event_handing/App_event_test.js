import './../App.css'
import ClickTestComponent from './ClickTestFile';
import ChangeTestComponet from './ChangeTestFile'
import MouseMoveTestComponet from './MouseMoveTestFile'
import KeyEventTestComponent from './KeyEventTestFile'
import SubmitTestComponent from './SubmitTestFile'


function App(){
  return(

    <div>
      <h1>React 이벤트 다루기</h1>
      <ClickTestComponent/>
      <ChangeTestComponet/>
      <MouseMoveTestComponet/>
      <KeyEventTestComponent/>
      <SubmitTestComponent/>
    </div>
    );
    
  
}
export default App;
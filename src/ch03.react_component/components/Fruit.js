import {Component} from 'react'

class Fruit extends Component{
  render(){
    const fruitList = ['사과', '배', '감', '바나나'] ;

    // map 함수를 사용하여 배열 안의 요소들을 변환시키고자 할 때 사용되는 함수로써, 새로운 배열이 만들어집니다.
    // 예시에서는 fruitList 요소 각각을 item으로 표현하고 있습니다.
    const fruits = fruitList.map((item) => (
      <li key={item}>{item}&nbsp;</li>
    ));

    return (
      <div align="center">
        <div align="center">과일 품목</div>
        <ol>
          {fruits}
        </ol>
      </div>
    );
  }
}

export default Fruit;

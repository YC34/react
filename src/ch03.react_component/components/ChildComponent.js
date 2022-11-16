import {Component} from 'react';
import PropTypes from 'prop-types';
class ChildComponent extends Component{
  render(){

    // 구조 분해 할당
    const {isCheck,members,address,salary,array,node,func} = this.props;

    const message=this.props.isCheck ? '놀러가자': '하던 일 마무리하';
    return(
        <div>
          <div>진위형 변수 : {String(isCheck)}</div>
          <div>결과 메시지 : {message}</div>
          <div>이름과 나이(객체) : {String(Object.entries(members))}</div>
          <div>주소 : {address}</div>
          <div>급여 : {salary}</div>
          <div>배열 : {array}</div>
          <div>노드 : {node}</div>
          <div>함수  : {String(func)}</div>
        </div>
      );
  }

}

ChildComponent.defaultProps = {
  salary:1234
}

ChildComponent.propTypes = {
  isCheck:PropTypes.bool,
  members:PropTypes.shape({
    name:PropTypes.string,
    age:PropTypes.number
  }),
  address:PropTypes.string.isRequired,
  salary:PropTypes.number,
  array:PropTypes.arrayOf(PropTypes.number),
  node:PropTypes.node,
  func:PropTypes.func

}
// 클래스 이름과 동일해야 합니다.
export default ChildComponent;
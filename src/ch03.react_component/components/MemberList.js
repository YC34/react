import {Component} from 'react';

class MemberList extends Component{
  render(){
    const member_array=[
          {id:'kim',name:'김유신',age:10,address:'금천구 가산동'},
          {id:'lee', name:'이순신',age:20,address:'용산구 이태원동'},
      ]
    const tr_member=member_array.map(member=>
          <tr key={member.id}>
            <td>{member.name}</td>
            <td>{member.age}</td>
            <td>{member.address}</td>
          </tr>
      );
    return(
        <div>
          <table border='1'>
            <thead>
              <tr>
                  <th>이름</th>
                  <th>나이</th>
                  <th>주소</th>
              </tr>  
            </thead> 
            <tbody>
                  {tr_member}
            </tbody>
          </table>
        </div>
      );
  }

}

// 클래스 이름과 동일해야 합니다.
export default MemberList;  
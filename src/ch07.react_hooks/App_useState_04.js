import { useState } from "react";
import './../App.css';

function App() {
	const [members, setMembers] = useState([
		{id:1, name:'김유신', age:22},
		{id:2, name:'이순신', age:45},
		{id:3, name:'을지문적', age:60},
		{id:4, name:'윤봉길', age:15},
	]);
  
	const [name, setName] = useState('');
	const [nextId, setNextId] = useState(5);
	const [age, setAge] = useState(0);
	
	const nameChange = e => setName(e.target.value);
	const ageChange = e => setAge(e.target.value);
	
	const addButtonClick = () => {
		const nextNames = members.concat({
			id:nextId,
			name:name,
			age:age,
		});
    
		setNextId(nextId + 1);
		setMembers(nextNames);
		setName('');
		setAge(0);
	}; /* end addButtonClick */

	const nameList = members.map(name => 
		//<li key={name.id} >{name.name}({name.age})</li>
		<li key={name.id} onDoubleClick={()=>onRemove(name.id)}>
			{name.name}({name.age})
		</li>
	);	
	
	const onRemove = id => {
		const nextNames = members.filter(name => name.id !== id);
		setMembers(nextNames);
	};

	return (
		<>
			이름&nbsp;:&nbsp;<input value={name} onChange={nameChange} />
			<br/>
			나이&nbsp;:&nbsp;<input value={age} onChange={ageChange} />
			<br/>
			<button onClick={addButtonClick}>추가</button>
			<hr/>
			항목을 더블 클릭하면 요소가 삭제됩니다.
			<ul>{nameList}</ul>
		</>
	)
}

export default App;
import {useState, useReducer} from "react";
import './../App.css';

/* 초기 값을 설정합니다. */
const initialState = {count: 0};

/* 리듀서를 구현합니다. */
function reducer(state, action) {
	/* 입력이 안되는 데이터는 undefined가 됩니다. */
	console.log('action.type='+action.type);
	console.log('action.min='+action.min);
	console.log('action.max='+action.max);
	console.log('action.step='+action.step);		
	
	switch (action.type){		
		case "INCREMENT":
			return state.count < action.max ? {count: state.count + action.step} : state;
			
		case "DECREMENT":
			return state.count > action.min ? {count: state.count - action.step} : state;
			
		case "RESET":
			return initialState;
			
		case "RANDOM":
			return {count: Math.floor(Math.random() * (action.max - action.min)) + action.min,};	
			
		default:
			throw new Error("Unsupported action type:", action.type);
	}
}	

function App({step = 1, min = 0, max = 10}) {		
	/* useReducer를 사용하여 state, dispatch 반환 받습니다. */
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			현재 값 : &nbsp;<span>{state.count}</span>
			<br/><br/>
			
			{/* 액션을 발생시킬 곳에 dispatch 함수를 적용합니다. */}
			<button onClick={() => dispatch({type: "INCREMENT", step, max})}>증가</button>
			&nbsp;
			<button onClick={() => dispatch({type: "DECREMENT", step, min})}>감소</button>
			&nbsp;
			<button onClick={() => dispatch({type: "RANDOM", min, max})}>무작위</button>
			&nbsp;
      		<button onClick={() => dispatch({type: "RESET"})}>초기화</button>			
		</>
	);
}
 

export default App;
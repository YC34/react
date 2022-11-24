
import {useState,useEffect} from 'react';
import axios from 'axios';

function JsonPlaceComponent() {
	const [receivedData, setReceivedData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error,setError] = useState(null);

	useEffect(() => {
		const fetchData = async () =>{
			try{
				setError(null);
				setReceivedData(null);

				setLoading(true);
				const url = 'https://jsonplaceholder.typicode.com/users';
				const response = await axios.get(url);
				console.log(response.data);
				setReceivedData(response.data);
			}catch(err){
				setError(err)
			} /* end try...catch */

				setLoading(false);
		};/* end fetchData */

		fetchData(); /* call function */		
	},[]);/* end useEffect */

	if(loading) return <div>로딩중입니다.</div>;
	if(error) return <div>오류가 발생했습니다..</div>;
	if(!receivedData) return null;


	return(
		<div>
			<ul>
				{receivedData.map(onedata => (
					<li key={onedata.id}>
						{onedata.username}({onedata.name})
					</li>



				))}



			</ul>

			         <hr/>
         <table border='1'>
            <thead>
               <tr>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>도시</th>
                  <th>회사명</th>
               </tr>
            </thead>
            <tbody>
            {receivedData.map(onedata => (
               <tr key={onedata.id}>
                  <td>{onedata.username}</td>
                  <td>{onedata.email}</td>
                  <td>{onedata.address.city}</td>
                  <td>{onedata.company.name}</td>
               </tr>
            ))}
            </tbody>
         </table>   
		</div>



		);
	
}
 
export default JsonPlaceComponent;


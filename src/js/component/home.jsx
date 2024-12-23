import React from "react";
import { useState, useEffect } from "react";

const Timer =()=> {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState([0,0,0,0]);
	const [reverse, setReverse] = useState(0);

	useEffect (()=>{
		const interval = setInterval(()=>{
			const c2Array = counter1.toString().padStart(4,'0').split('');
			setCounter2(c2Array);
			setCounter1((prevCounter1)=>prevCounter1+1);},1000);

			

			return()=>clearInterval(interval);},[counter1]);


	return (


		<>

			<div className="card text-center col-6" style={{ width: '400px' }}>

				<img src="https://cdn-images-3.listennotes.com/podcasts/se%C3%B1ores-dejo-todo/t2-e14-el-tano-pasman-pEcqXrynbPC-BMXwpCeJDEr.1400x1400.jpg" />
				<div className="card-img-overlay text-warning" style={{
					position: "absolute",
					top: "50px", left: "45px", width: "120px", height: "105px"
				}}>
					<h2 className="position-absolute top-50 start-50 translate-middle">
						{counter2[0]}{counter2[1]}{counter2[2]}{counter2[3]}</h2>
				</div>
				<h1>No te detengas Carajo!!!</h1>
			</div>


		</>
	);
}


export default Timer
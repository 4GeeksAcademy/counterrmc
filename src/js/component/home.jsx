import React from "react";
import { useState, useRef, useEffect } from "react";

function reloj() {
	const [count, setCount] = useState(0);



	let timer1 = useRef();
	useEffect(() => {
		timer1 = setInterval(() => {
			setCount((prev) => {
				if (prev >= 9999) {
					return 0;
				} else {
					return prev + 1;
				}
			});
		}, 1000);

		return () => clearInterval(timer1);
	}, []);
	let counter = count.toString().padStart(4, 0);

	return (
	<div className="row">
		<div className="card text-center col-6" style={{width:'400px'}}>
			
			<img src="https://cdn-images-3.listennotes.com/podcasts/se%C3%B1ores-dejo-todo/t2-e14-el-tano-pasman-pEcqXrynbPC-BMXwpCeJDEr.1400x1400.jpg"/>
			<div className="card-img-overlay text-warning" style={{position: "absolute",
			top: "50px", left:"45px", width:"120px", height:"105px" }}>
				<h2 className="position-absolute top-50 start-50 translate-middle">{counter}</h2>
			</div>
			<h1>No te detengas Carajo!!!</h1>
		
		</div>
	</div>
	);
}


export default reloj
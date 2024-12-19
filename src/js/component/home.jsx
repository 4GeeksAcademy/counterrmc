import React from "react";
import { useState, useRef, useEffect } from "react";

function reloj() {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);



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
	let timer2 = useRef();
	useEffect(() => {
		timer2 = setInterval(() => {
			setCount2((prev) => {
				if (prev <= 0) {
					return 9999;
				} else {
					return prev - 1;
				}
			});
		}, 1000);

		return () => clearInterval(timer2);
	}, []);
	let counter1 = count.toString().padStart(4, 0);
	let counter2 = count2.toString().padStart(4, 0);



	return (


		<>

			<div className="card text-center col-6" style={{ width: '400px' }}>

				<img src="https://cdn-images-3.listennotes.com/podcasts/se%C3%B1ores-dejo-todo/t2-e14-el-tano-pasman-pEcqXrynbPC-BMXwpCeJDEr.1400x1400.jpg" />
				<div className="card-img-overlay text-warning" style={{
					position: "absolute",
					top: "50px", left: "45px", width: "120px", height: "105px"
				}}>
					<h2 className="position-absolute top-50 start-50 translate-middle">
						{counter1}</h2>
				</div>
				<h1>No te detengas Carajo!!!</h1>
			</div>




			<button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
				Haz enojar a Tano!
			</button>


			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div className="card text-center col-6" style={{ width: '400px' }}>


								<img src="https://www.agencianova.com/data/fotos2/bbx_307685074_tano.png" />
								<div className="card-img-overlay text-danger" style={{
									position: "absolute",
									top: "15px", left: "20px", width: "120px", height: "105px"
								}}>
									<h2 className="position-absolute top-50 start-50 translate-middle">{counter2}</h2>
								</div>
								<h1>LPQM Pariooo !!!</h1>

							</div>




						</div>
						
					</div>
				</div>
			</div>

		</>
	);
}


export default reloj
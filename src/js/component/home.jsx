import React from "react";


function reloj() {
	const [timer, setTimer] = React.useState(99);
	const id = React.useRef(null);
	
	React.useEffect(() => {
	  id.current = window.setInterval(() => {
		setTimer((time) => time - 1);
	  }, 1000);
	  return () => clear();
	}, []);
  
	React.useEffect(() => {
	  if (timer === 0) {
		clear();
	  }
	}, [timer]);
  
	return (
	  <div className="reloj">
		<img className="img" src="https://media.newyorker.com/photos/62e85962fdcd53b7bf03b3b3/3:2/w_3000,h_2000,c_limit/gettyimages-681898.jpg"/>
		<div className="position-absolute top-50 start-50 translate-middle badge text-bg-danger text-wrap fs-1">
		<p>00{timer} </p>
		</div>
	  </div>
	);
  }
		
  export default reloj
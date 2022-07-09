import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color,setColor] = useState('white')
	return (
	<div style ={
		{
		minwidth:'100vw',
		minHeight: '100vh',
		background: color,
		display: "flex",
		justifycontent: "center",
		alignitems: "center"
	}
}><toDoList property={value}/>
<input
	);
};

export default Home;

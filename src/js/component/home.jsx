import React, { useState } from "react";
import TaskInput from "./taskinput.jsx";

const Home = () => {
	const [list, setlist]= useState([])
	const addItem = (li) =>{
		const newList =[...list]
		newList.push(li)
		setlist(newList)
		console.log(newList)
	}
	return(
		<div className="container-fluid">
			<h1>Todo list</h1>
				<TaskInput addItem={addItem} />
				{list.map((li,index)=><li key={`${li}-${index}`}>{li}</li>)}
		</div>
	)
}

export default Home;

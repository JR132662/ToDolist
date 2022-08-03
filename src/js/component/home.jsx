import React, { useEffect, useState } from "react";
import TaskInput from "./taskinput.jsx";

const Home = () => {
	const [list, setlist]= useState([])
	const [hoveredIndex, sethoveredIndex]= useState(-1)
	const addItem = (li) =>{
		const newList =[...list]
		newList.push(li)
		setlist(newList)
		console.log(newList)
	}
	const Deleteitem = (index) => {
		const newList = [...list]
		newList.splice(index, 1)
		setlist(newList)

	}
	return(
		<div className="container-fluid">
			<h1 className="Headerlist">To Do list</h1>
				<TaskInput addItem={addItem} />
				{list.map((li,index)=>{
					return (
						<li onMouseEnter={()=>sethoveredIndex(index)}
						onMouseLeave = {()=>sethoveredIndex(-1)}
						key={`${li}-${index}`}>
							{li}
							{hoveredIndex===index &&
							<button className="DelButton" onClick={() => Deleteitem(index)}>X</button>
							}
						</li>
					)
				}
				)}
				<footer>{list.length + " items left"}</footer>
				<button className="DelallButton" onClick={() => setlist([])}>Clear</button>
		</div>
	)
};



export default Home;

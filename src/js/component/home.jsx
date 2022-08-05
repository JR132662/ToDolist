import React, { useEffect, useState } from "react";
import TaskInput from "./taskinput.jsx";

const Home = () => {
	const [list, setlist]= useState([])
	const [hoveredIndex, sethoveredIndex]= useState(-1)
	const addItem = (li) =>{
		console.log(li,"li")
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
	const getAllTodos = () =>{
		fetch('https://assets.breatheco.de/apis/fake/todos/user/JonaR')
			.then((resp)=>{
				if(!resp.ok){
					throw new Error(
						`${resp.status} - ${resp.statusText}`
					);
				}
				return resp.json()
			})
			.then((data)=>{
				setlist([data[0].label])
			})
	}
	const updateApi = (todos) => {
		fetch('https://assets.breatheco.de/apis/fake/todos/user/JonaR', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
		console.log('resp',resp)
        console.log("resp.ok",resp.ok); // will be true if the response is successfull
        console.log("resp.status",resp.status); // the status code = 200 or code = 400 etc.
        console.log("resp.text",resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log("data",data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
	}
	useEffect(()=>{
		getAllTodos();
	},[])
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

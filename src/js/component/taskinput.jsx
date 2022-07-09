import React, {useState} from "react";

const TaskInput = (props) => {
    const [inputValue, setInputValue ] = useState('');
    
    const validateInput = () => {
        if(inputValue === "") {
            alert("No tasks, Add a task");
        } else{
            props.addItem(inputValue)
        }
    }

    return (
        <div className="container-fluid">
        <input
         type="text" 
         onChange={e => setInputValue(e.target.value)} 
         value={inputValue} 
         onKeyPress={(e)=>e.key==="Enter" && validateInput()}
         />

        <button className="btn btn-primary" onClick={validateInput}>Add task</button>
        </div>
    )
    
}

    export default TaskInput;
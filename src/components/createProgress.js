import { useState, useContext } from "react";
import { TaskContext } from "../context/taskContext";


const CreateProgress = () =>{
    const [task, setTask] = useState("")
    
    const {dispatch} = useContext(TaskContext)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({type:'ADD_TASK', tasks:{
         
            task
        }})
        setTask('')
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input className="task-input" 
                placeholder="Add a task"
                value={task} onChange={e=>setTask(e.target.value)}/><br/>
                <input className="button" type="submit" value="Add a task" required/>
                
            </form>
        </>
    )
}

export default CreateProgress;
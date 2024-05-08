import { createContext, useEffect, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";



export const TaskContext = createContext();


const TaskContextProvider = (props) =>{
    const [tasks, dispatch] = useReducer(taskReducer,  [], ()=>{
        const localData = localStorage.getItem('tasks')
        return localData ? JSON.parse(localData) : 
            {
                phases:[[],[],[]],
                currentPhase:0,
                completedTask:[],
                completedPhase:[],
                allPhaseCompleted: false
            }
    
    }
    )

    useEffect(()=>{
        
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    return(
        <TaskContext.Provider value = {{tasks, dispatch}}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider
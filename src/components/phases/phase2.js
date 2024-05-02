import { useContext} from 'react'
import { TaskContext } from '../../context/taskContext'



const Phase2 = () =>{
    const {tasks, dispatch} = useContext(TaskContext)
  
    return tasks.length ? (
        <div className='list'>
            <h3>PHASE 2</h3>
            {tasks.map(tasks=>{
                return(
                <div className='list-container' key={tasks.id}>
                    <div className='list-item'>
                        <li onClick={()=>{dispatch({type:'REMOVE_TASK', id:tasks.id})}}>
                            {tasks.task} 
                        </li>
                        <input className='check' type="checkbox" 
                        onClick={()=>{dispatch({type:'REMOVE_TASK', id:tasks.id})}}/>
                    </div>
                </div>
                )
            })}
        </div>
    )
    
    : (
        <div>
            There are no tasks available
        </div>
    )
}

export default Phase2;
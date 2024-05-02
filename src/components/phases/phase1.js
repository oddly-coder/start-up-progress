
import { useContext} from 'react'
import { TaskContext } from '../../context/taskContext'

const Phase1 = () =>{
    const {tasks, dispatch} = useContext(TaskContext)
  
    return tasks.length ? (
        <div className='list'>
            <h3>PHASE 1</h3>
            {tasks.map(tasks=>{
                return(
                <div className='list-container' key={tasks.id}>
                    <div className='list-item' style={{ textDecoration: tasks.completed ? 'line-through':'none'}}>
                        <li onClick={()=>{dispatch({type:'REMOVE_TASK', id:tasks.id})}}>
                            {tasks.task} 
                        </li>
                        <input className='check'  value={tasks.completed} type="checkbox" 
                        onClick={()=>{dispatch({type:'UPDATE_TASK', id:tasks.id})}}/>
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

export default Phase1;
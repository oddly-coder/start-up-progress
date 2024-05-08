
import { useContext} from 'react'
import { TaskContext } from '../../context/taskContext'


const Phase1 = () =>{
    const {tasks, dispatch} = useContext(TaskContext)
    
    
    return tasks.currentPhase === 0?(
        tasks.phases[0].length ? (
            <div className='list'>
                <h3>PHASE 1</h3>
                {tasks.phases[0].map(tasks=>{
                    return(
                    <div className='list-container' key={tasks.id}>
                        <div className='list-item' style={{ textDecoration: tasks.completed ? 'line-through':'none'}}>
                            <li onClick={()=>{dispatch({type:'REMOVE_TASK', id:tasks.id})}}>
                                {tasks.task} 
                            </li>
                            <input className='check'  value={tasks.completed} 
                            checked={tasks.completed} type="checkbox" 
                            onClick={()=>{dispatch({type:'UPDATE_TASK', id:tasks.id})}}/>
                        </div>
                    </div>
                    )
                })}
                <button className='complete-button' onClick={()=>{dispatch({type:'COMPLETED_PHASE', id:tasks.currentPhase})}}>compltee phase</button>
            </div>
        )
        
        : (
            <div>
                There are no tasks available
            </div>
        )
    ):
    (
        tasks.phases[0].length ? (
            <div>
                <div className='list'>
                    <h3>PHASE 1</h3>
                    <div className='locked-box'>
                        LOCKED
                    </div>
                    <button className='reopen-button' onClick={() => { dispatch({ type: 'REOPEN_PHASE', id: 0 }) }}> ReOpen</button>
                </div>
            </div>
        ) : (
            <div>
                <div className='list'>
                    <h3>PHASE 1</h3>
                    <div className='locked-box'>
                        LOCKED
                    </div>
                    
                </div>
            </div>
        )
    )
}

export default Phase1;
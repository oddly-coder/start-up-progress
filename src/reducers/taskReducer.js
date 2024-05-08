const { v4: uuidv4} = require('uuid')


export const taskReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TASK':
            const updatedPhases = [...state.phases ]
            updatedPhases[state.currentPhase] =[
                ...updatedPhases[state.currentPhase],
            {
                id: uuidv4(),
                task: action.tasks.task,
                completed: false, 
            }
        ]
            console.log(state.currentPhase)
            return {...state,
                phases: updatedPhases
            }
            case 'UPDATE_TASK':
                const toggledPhase = [...state.phases];
                toggledPhase[state.currentPhase] = toggledPhase[state.currentPhase].map(task => {
                    if (task.id === action.id) {
                        const updatedTask = {
                            ...task,
                            completed: !task.completed 
                        };
                        return updatedTask;
                    } else {
                        return task;
                    }
                });
                return {
                    ...state,
                    phases: toggledPhase
                };
      

        case 'COMPLETED_PHASE':
            var completedOnes = 0
            if(state.currentPhase === 2){
                state.allPhasesCompleted = true
                alert('congratulation all phases is completed')
            }
            state.phases[state.currentPhase].map(
                t=>t.completed? completedOnes ++ : completedOnes
            )
            if(state.currentPhase === action.id){
                if(state.phases[state.currentPhase].length === completedOnes){
                    completedOnes = 0
                    
                    return{
                        ...state,
                        completedPhases: [...state.completedPhase, state.currentPhase],
                        
                        currentPhase: state.currentPhase + 1
                        
                    }
                }
                else{
                    return state
                }
            }
            else{
                  console.log("passed")
            return state;
            }
                
        case 'REOPEN_PHASE':
            return{
                ...state,
                completedPhases: [...state.completedPhase, state.currentPhase],
                
                currentPhase: state.currentPhase - 1
                
            }
            
            
        case 'REMOVE_TASK':
            const removedTask = [...state.phases];
                removedTask[state.currentPhase] = removedTask[state.currentPhase].filter(t => {
                    return t.id !== action.id
                });
                return {
                    ...state,
                    phases: removedTask
                };
      
        default:
            return state
    }
}
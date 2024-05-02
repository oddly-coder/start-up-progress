const { v4: uuidv4} = require('uuid')


export const taskReducer = (state = [], action) =>{
    switch(action.type){
        case 'ADD_TASK':
            return [...state, {
                id: uuidv4(),
                task: action.tasks.task,
                completed: false
            }]
        case 'UPDATE_TASK':
            return state?.tasks.map(
                
                task => task.id !== action.id ? {...task, completed: !task.completed}: task
                )
        case 'REMOVE_TASK':
            return state?.filter(t=>t.id !== action.id);
        default:
            return state
    }
}
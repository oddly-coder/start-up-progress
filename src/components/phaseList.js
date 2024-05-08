import { useContext } from "react"
import { TaskContext } from "../context/taskContext"
//phases
import Phase1 from "./phases/phase1"
import Phase2 from "./phases/phase2"
import Phase3 from "./phases/phase3"



const PhaseList = () =>{
    const {tasks} = useContext(TaskContext)
    return tasks.completedAllPhases ? (
        <div className="phase-container">
            congratulations you have complted all phases
        </div>
    ):
    (
        <div className="phase-container">
            <Phase1/>
            <Phase2/>
            <Phase3/>
        </div>
    )
  
    
}

export default PhaseList
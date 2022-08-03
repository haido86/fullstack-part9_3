import { Part } from "../types"

const Content=(props: Part)=>{
    return (
        <div>            
            <p>{props.name} {props.exerciseCount}</p>
        </div>
    )
}

export default Content
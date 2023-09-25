import { useState } from "react"

const Todoitems=(props)=>{
 
    return(
      
        <div>
            <h2>{props.obj.name}</h2>
          <button onClick={()=>props.ondelete(props.obj)}>delete</button>
          <button onClick={()=>props.onedit(props.obj)}>edit</button>
        </div>

    )
}
export default Todoitems
import React, { useState } from "react";
import Todoitems from "./Components/Todoitems";
const App=()=>{
    let[list,setlist]=useState([])
    let[todoname,settodoname]=useState("")

    let Updatetodoname=(e)=>{
        settodoname(e.target.value)
    }
    let addTodo=()=>{
        if(todoname!==""){
      setlist([...list,{
        id:1,
        name:todoname,completed:false
      }]) 
      settodoname("") 
    }
    }
    let onedit=item=>{
        console.log(list)
        let  newa=list.find((todoedit)=>{
            return todoedit.id=== item.id
        })
        console.log(newa);
        settodoname(newa.name);
        




       
    }



    let ondelete=item=>{
        let newList=list.filter(Todoitems=>{
            if(Todoitems.name===item.name){
                return false
            }
            return true
        })
        setlist(newList)
            
    }

    return(
        <div>
            <h3>
                <input type="text" placeholder="what's the plan for today...?"  value={todoname} onChange={Updatetodoname} required/>

            </h3>
        <button onClick={addTodo
        }>add task

        </button>
        {
            list.map(item=><Todoitems obj={item} ondelete={ondelete} onedit={onedit}/>)
           


        }
        </div>
    )
}
export default App
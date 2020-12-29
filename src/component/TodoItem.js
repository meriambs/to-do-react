import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletTodo, updateTodo ,completTodo } from "../redux/action";
import { AiOutlineCheck } from "react-icons/ai";
function TodoItem({todo}){
    const [editable,setEditable] = useState(false);
    const [name,setName]=useState(todo.name);

  let dispatch = useDispatch();
  
      return(
        <div>
           
            <div 
            className="row mx-2 align-items-center">
                {/* <div>{todo.id.length > 1 ?todo.id[2] : todo.id}</div> */}
                <div>
                   <AiOutlineCheck onClick={()=>{
                     console.log('hey',todo.id);
                     dispatch(completTodo(todo.id))}}>  
                   {' '}
                {!todo.isCompleted ? 'Complete' : 'Undo'}</AiOutlineCheck>
                </div>
                <div 
                className="col" >
 {editable ? <input type="text" className="form-control"
 value={name} 
 onChange={(e)=>{console.log(e.target.value);
 setName(e.target.value)}} /> : <h4  style={{
                  display: 'inline',
                  textDecoration: todo.isCompleted ? 'line-through' : 'none'
                }}
                >{todo.name}</h4>}
 </div>
                    
                 <button 
                 className="btn btn-danger m-2"
                 onClick={()=>dispatch(deletTodo(todo.id))}
                 >Delete</button>
     
                    <button  
     className="btn btn-primary m-2"
     onClick={()=> {
         dispatch(updateTodo(
             {
                 ...todo,
                 name:name,
             }
         ))
         if (editable){
             setName(todo.name);
         }
         setEditable(!editable);
         
     }}
     >{editable ? "Update" : "Edit"}</button>
    
            </div>
       
       
        </div>
    );
}

export default TodoItem;
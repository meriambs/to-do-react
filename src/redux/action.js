

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const COMPLET_TODO = "COMPLET_TODO";
export const DONE_ORNOT = "DONE_ORNOT";


export function addTodo(todo){
    return {
        type:ADD_TODO,
        payload:todo,
    }
}




export function deletTodo(todoId){
    return {
        type: DELETE_TODO,
        payload:todoId,
    }
}


export function updateTodo(todo){
    return {
        type:UPDATE_TODO,
        payload:todo,
    }
}

// const COMPLET_TODO = "COMPLET_TODO";

 export function completTodo(todo){
     return {
         type:COMPLET_TODO,
         payload:todo,
     }
}

// export function doneornot(todo){
//     return {
//         type:DONE_ORNOT,
//         payload:todo,
//     }
// }
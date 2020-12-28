
import {ADD_TODO,DELETE_TODO,UPDATE_TODO} from './action';
import {todos} from './state';

export let reducer = (state = {todos}, action) => {
     let newTodos;
       switch (action.type) {
           case ADD_TODO:
                newTodos=[...state.todos];
               newTodos.push(action.payload);
               return {
                   ...state,
                   todos :newTodos,
                  
               };
            
           case DELETE_TODO:
                newTodos = [...state.todos];
              newTodos = newTodos.filter(todo=>todo.id !== action.payload)
             return {
                   ...state,
                   todos :newTodos,
                  
               };
               
         case UPDATE_TODO:
               newTodos = [...state.todos];
               let index = -1 ;
               for (let i = 0 ; i < newTodos.length ; i++){
                   index++;
                   if(newTodos[i].id == action.payload.id){
                       break;
                   }

               }
               if (index !== -1){         
             newTodos[index]= action.payload;     
              return {
                   ...state,
                   todos :newTodos,
                  
               };
            }
 }  
return state;
}
 
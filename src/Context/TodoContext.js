import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos:[{
        todo:"title",
        id:1,
        completed:false
    }],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(todo,id)=>{},
    toggleComplete:(id)=>{}

})

export const useTodo =()=>{
   return useContext(TodoContext)
} 
export const TodoContextProvider = TodoContext.Provider
    
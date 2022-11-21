import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer.js";

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = (initialValue = []) => {

    const [todos, dispatch] = useReducer(todoReducer, initialValue, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    

    const handleNewTodo = ( todos ) => {
        const action = {
            type: "Add TODO",
            payload: todos,
        } 

        dispatch( action );
    }

    const handleRemoveTodo = ( id ) => {
        const action = {
            type: "Remove TODO",
            payload: id,
        } 

        dispatch( action );
    }

    const handleToggleTodo = ( id ) => {
        const action = {
            type: "Toggle TODO",
            payload: id,
        } 
        
        dispatch( action );
    }

    // otra opcion es usar react hook form que es el mismo pero mucho mejor elaborado
  return ({todos, handleNewTodo, handleToggleTodo, handleRemoveTodo});
}

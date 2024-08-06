import {createContext , useContext} from "react";

export const TodoContext = createContext({

        todos: [
            {
                id: 1,
                todo: "Todo msg",
                compelted: false,
            },
        ],

        addTodo : (todo) => {},
        updatedTodo : (id, todo) = {},
        deleteTodo :(id) => {},
        toggleComplete : (id) => {}


})

export const useTodo = ()=> {
    return useContext(TodeContext);
}


export const Todoprovider = TodoContext.Provider
import Todo from "./Todo/Todo";
import React from "react";

const Todos = (props) => {

    //deleteTodo
    const deleteTodo = (id) => {
        props.deleteTodo(id);
    }

    const todos = props.todos.map(todo => (
        <Todo 
        key={todo.id} 
        id={todo.id} 
        title={todo.title} 
        description={todo.description}
        deleteTodo={deleteTodo}
        />
    ));

  return (
    <ul>
        {todos}
    </ul>
   )
}

export default Todos
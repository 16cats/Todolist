import { useState } from "react";
import './App.css'
import TodoTable from "./components/TodoTable";
import TodoGrid from "./components/TodoGrid"

function Todolist() {
    // state
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ target: '', description: '' });

    // function to handle input changes for todo
    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });

    }

    // function to add a todo
    const addTodo = (event) => {
        event.preventDefault();
        console.log("insert new todo to matkat array");
        setTodos([...todos, todo]);
    }

    //delete
    const deleteByIndex = (index) => {
        console.log(index);
        setTodos(todos.filter((todo, i) => i !== index));
    }

    return (
        <>
            <form onSubmit={addTodo}>
                <p> <label>Todo list </label>
                    <input
                        type="text"
                        name="target"
                        value={todo.target}
                        onChange={inputChanged} /></p>
                <p><label>Description </label>
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        value={todo.description}
                        onChange={inputChanged} /></p>
                <input type="submit" value="Lisää" />

            </form>

            <TodoGrid
            places={todos}
            deleteByIndex = {deleteByIndex}
            />

        </>
    )
}

//            <TodoTable todos={todos} onDelete={deleteByIndex} />
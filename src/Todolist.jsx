import { useState } from "react";
import TodoTable from "./TodoTable";

export default function Todolist() {
    // state
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [date, setDate] = useState('');

    // function to handle input changes for description
    const handleDescriptionInputChange = (e) => {
        setTodo(e.target.value);
    }

    // function to handle input changes for date
    const handleDateInputChange = (e) => {
        setDate(e.target.value);
    }
    
    // function to add a todo
    const addTodo = () => {
        if (todo.trim() !== '' && date.trim() !== '') {
            setTodos([...todos, { description: todo, date: date }]);
            setTodo('');
            setDate('');
        }
    }
    
    //delete
    const deleteByIndex = (index) => {
        console.log(index);
        setTodos(todos.filter((todo, i) => i !== index));
      }

    return (
        <>
            <h1>Todolist</h1>
            <div>
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={todo}
                    onChange={handleDescriptionInputChange}
                />
                <input
                    type="text"
                    name="date"
                    placeholder="Date"
                    value={date}
                    onChange={handleDateInputChange}
                />
                <button onClick={addTodo}>
                    Add
                </button>
                
            </div>
            
            <TodoTable todos={todos} onDelete={deleteByIndex}/>
        </>
    );
}

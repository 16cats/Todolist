import React, { useState } from "react";
import TodoTable from "./components/TodoTable";
import TodoGrid from "./components/TodoGrid"
import TodoTab from "./components/TodoTab"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Todolist() {
    const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }

    const addTodo = (event) => {
        setTodos([...todos, todo]);
        setTodo({ description: '', date: '', priority: '' }); // Reset input fields
    }

    const deleteByIndex = (index) => {
        console.log(index);
        setTodos(todos.filter((todo, i) => i != index));
    }

    const dateChanged = (date) => {
      setTodo({ ...todo, date: date });
    }

    return (
        <>
        <Stack  direction="row" spacing={2} justifyContent="center" alignItems="center">
        <h1>Todo list</h1>
        <TextField
            label="Description"
            variant="standard"
            name="description"
            value={todo.description}
            onChange={inputChanged}>
          </TextField>
    
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            value={todo.date}
            onChange={dateChanged}
          />
        </LocalizationProvider>

          <TextField
            label="Priority"
            variant="standard"
            name="priority"
            value={todo.priority}
            onChange={inputChanged}>
          </TextField>

        <Button variant="contained"
            onClick={addTodo}
          >Add</Button>

        </Stack>

            <TodoGrid
                todos={todos} deleteByIndex={deleteByIndex}
            />
        </>
    );
}

export default Todolist;
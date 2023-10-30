import './App.css'
import { useState } from "react";
import Todolist from './Todolist'
import Home from './components/Home'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function App() {

  const [value, setValue] = useState('Home');

  const handleChange = (event, value) => {
    console.log("Works for me!")
    setValue(value);

  }
  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab value="Home" label="Home" />
        <Tab value="Todos" label="Add Todo" />
      </Tabs>
      {value === 'Home' && <Home/>}
      {value === 'Todos' && <Todolist/>}

    </div>
  )
}

// export default App
//props, child components
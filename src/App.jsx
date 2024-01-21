import { useState } from 'react'
import './App.css';
import { Todolist } from './components/Todolist/Todolist';
import { AddTodo } from './components/AddTodo/AddTodo';



function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo('');
    }

    return (
      <div className='app'>
         <AddTodo addTodo={addTodo} todo={todo} setTodo={setTodo}/>
         <Todolist list={todos} />
      </div>
  )
}

export default App

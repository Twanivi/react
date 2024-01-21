import './AddTodo.css';
import { InputTodo } from './InputTodo/InputTodo';
import { Button } from './Button/Button';

export const AddTodo = ({todo, setTodo, addTodo}) => {

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

return (
    <div className='add-todo'>
        <InputTodo value={todo} onChange={handleChange}/>
        <Button onClick={addTodo}/>
    </div>
)}
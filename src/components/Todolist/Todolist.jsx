import './Todolist.css';

export const Todolist = ({list}) => {
    return (
    <div className='todo-list'>
        <ul>
            {list.map((entry, index) => (
                <li key={index}>{entry}</li>
            ))} 
        </ul>
    </div>
    )
}



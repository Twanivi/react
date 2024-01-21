

export const InputTodo = ({value, onChange }) => {
    return (
        <div className='add-todo-input'>
            <input type="text" placeholder='Create new todo' value={value} onChange={onChange}/>
        </div>
    )
}
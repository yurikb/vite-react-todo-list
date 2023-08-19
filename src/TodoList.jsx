/* eslint-disable react/prop-types */
export function TodoList({ todos, toggleTodo, deleteTodo}) {
    return (
        <>
            <h1 className="header">Todo List</h1>
            <ul className="list">
            { todos.length === 0 && "No Todos"}
            { todos.map(todo => {
                return (
                <>
                    <li key={todo.id}> 
                    <label>
                        <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                        {todo.title}
                    </label>
                    <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
                    </li>
                </>
                )
            })}
            </ul>
    </>
    )
}
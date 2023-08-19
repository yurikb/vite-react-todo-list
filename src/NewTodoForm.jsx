import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function NewTodoForm({addTodo}) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return

        addTodo(newItem)
        setNewItem("");
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
            <label htmlFor="item">New Todo</label>
            <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text"
                id="item" />
            <button className="btn">Add</button>
            </div>
        </form>
    )
}
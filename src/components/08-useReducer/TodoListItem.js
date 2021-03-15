import React from 'react'

export const TodoListItem = ({todo, i, handleDelete, handleToggle}) => {
    return (
        <div className="row d-flex align-items-center my-2" key={todo.id}>
            <div className="col-8">
                <p className={todo.done ? "todo-description-done" : "todo-description-undone"}
                    onClick={() => handleToggle(todo.id)}>
                    {i + 1}. {todo.desc}
                </p>
            </div>
            <div className="col-4">
                <button className="btn-delete" onClick={() => handleDelete(todo.id)}>Borrar <i className="bi bi-trash" ></i></button>
            </div>
        </div>
    )
}

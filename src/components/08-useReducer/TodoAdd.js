import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
    const [{description}, handleInputChange, reset] =  useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim().length <= 1){
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo)
        reset();
    }

    return (
        <div className="card-body">
            <form onSubmit={handleSubmit}>

                <input
                    className="input-add-todo mb-3"
                    type="text"
                    name="description"
                    placeholder="Hacer ..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <button
                    className="btn-add"
                    type="submit"
                >
                    Agregar
                <i className="bi bi-plus"></i>
                </button>
            </form>
        </div>
    )
}

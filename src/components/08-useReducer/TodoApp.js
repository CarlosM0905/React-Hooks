// IMPORTS
import React, { useEffect, useReducer } from 'react'
// REDUCER
import { todoReducer } from './todoReducer';
// COMPONENTS
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd';
// STYLES
import './styles.css'

export const TodoApp = () => {

    const init = () => {

        if(localStorage.getItem('todos')){
            return JSON.parse(localStorage.getItem('todos'));
        }
        else{
            return [];
        }
    }
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = ( newTodo ) => {
        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex container-app justify-content-center align-items-center">
                <div className="col-5">
                    <div className="card mt-3 card-todo-list">
                        <div className="card-header card-header-todo-list">
                            <p className="text-title-list">TODO App <i className="bi bi-list-task"></i><span className="indicator-todos">{todos.length}</span> </p>
                        </div>
                        <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                    </div>
                </div>
                <div className="col-5">
                    <div className="card mt-3 card-todo-list">
                        <div className="card-header card-header-todo-list">
                            <p className="text-title-list">Agregar TODO <i className="bi bi-plus-circle"></i></p>
                        </div>
                        <TodoAdd  handleAddTodo={handleAddTodo}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

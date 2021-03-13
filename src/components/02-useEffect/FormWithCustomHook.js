import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import Message from './Message';
import './SimpleForm.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('Email cambio')
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <div className='container-fluid'>
            <div className="row d-flex justify-content-center">
                <div className='col-4'>
                    <div className="card m-3 card-form">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <p className="text-center text-info fw-bold">Form With Custom Hook</p>
                            <div className="form-group my-2">
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="form-control input-form"
                                    autoComplete="off"
                                    placeholder="Ingrese su nombre"
                                    value={name}
                                    onChange={handleInputChange}
                                    />
                            </div>

                            <div className="form-group my-2">
                                <input 
                                    type="text" 
                                    name="email" 
                                    className="form-control input-form"
                                    autoComplete="off"
                                    placeholder="email@gmail.com"
                                    value={email}
                                    onChange={handleInputChange}
                                    />
                            </div>

                            <div className="form-group my-2">
                                <input 
                                    type="password" 
                                    name="password" 
                                    className="form-control input-form"
                                    placeholder="*******"
                                    value={password}
                                    onChange={handleInputChange}
                                    />
                            </div>
                            <button className="btn-form" type="submit">Guardar</button>
                            { (name  === '123') && <Message/> }
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

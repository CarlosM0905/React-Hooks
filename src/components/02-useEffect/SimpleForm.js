import React, { useEffect, useState } from 'react';
import Message from './Message';

import './SimpleForm.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState;


    // Realiza solo al principio -- ngOnInit
    useEffect(() => {
        
    }, []);

    // Realiza la funcion ante cualquir cambio -- ngOnChange
    useEffect(() => {
        
    });

    // Realizar la funcion ante un cambio en el form
    useEffect(() => {
        
    }, [formState]);

    // Realiza la funcion ante un cambio en el input del nombre
    useEffect(() => {
        
    }, [name])

    // Realiza la funcion ante un cambio en el input del email
    useEffect(() => {
        
    }, [email])



    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <div className='container-fluid'>
            <div className="row d-flex justify-content-center">
                <div className='col-4'>
                    <div className="card m-3 card-form">
                        <div className="card-body">
                            <p className="text-center text-info fw-bold">Use Effect Form</p>
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

                            { (name  === '123') && <Message/> }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

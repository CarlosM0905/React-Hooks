import React, { useState } from 'react'
import './CounterApp.css';


const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    })

    const {counter1, counter2} = state;
    
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <div className="card card-counter m-3">
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <p className="counter-text">Counter1 = {counter1}</p>
                            <p className="counter-text">Counter2 = {counter2}</p>

                            <button 
                            onClick={() => {
                                setState({
                                    ...state,
                                    counter1: counter1 + 1
                                });
                            }}
                            className="btn-counter">
                                +1
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterApp

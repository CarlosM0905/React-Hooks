import React from 'react'
import useCounter from '../../hooks/useCounter'
import './CounterApp.css'

export const CounterWithCustomHook = () => {
    
    const {state, increment, decrement, reset } = useCounter()

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <div className="card card-counter m-3">
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <p className="counter-text">Counter with Hook : {state}</p>
                            <button onClick={() => increment(2) } className="btn-counter mb-4"> +2 </button>
                            <button onClick={() => reset() } className="btn-counter mb-4"> Reset </button>
                            <button onClick={() => decrement(2) } className="btn-counter"> -2 </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

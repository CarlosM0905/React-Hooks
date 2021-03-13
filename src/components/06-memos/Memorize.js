import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import {Small} from './Small';

const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Contador : <Small value={counter}></Small> </h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
            <button className="btn btn-outline-primary mx-2"
                    onClick={() => {
                        setShow(!show);
                    }}
            >
                Mostrar/Ocultar/ Valor: {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default Memorize

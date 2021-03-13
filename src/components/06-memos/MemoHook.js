import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter'

const Memorize = () => {

    const {counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);



    const memoProcesoPesado =  useMemo(() => procesoPesado(counter), [counter]);
    console.log(memoProcesoPesado);

    return (
        <div>
            <h1>Contador : <small>{counter}</small> </h1>
            <hr />
            <p> {memoProcesoPesado} </p>
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

export default Memorize;

import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'
import '../../index.css';


const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div className="container-fluid">

            <div className="row">
                <p className="text-center mt-5 h3 text-info">Real Example Ref</p>
                
                { show && <MultipleCustomHooks /> }
                <button className="btn-show" onClick={() => {
                    setShow(!show)
                }}>
                    Mostrar/Ocultar
                </button>
            </div>
        </div>
    )
}

export default RealExampleRef

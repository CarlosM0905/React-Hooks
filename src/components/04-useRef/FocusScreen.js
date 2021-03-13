import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-header">
                            <p>Focus Screen</p>
                        </div>
                        <div className="card-body">
                            <input 
                            ref={inputRef}
                            className="form-control mb-2" placeholder="Su nombre"/>
                            <button className="btn btn-primary"
                                    onClick={handleClick}
                            >
                                Focus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FocusScreen

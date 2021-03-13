import React from 'react'
import useCounter from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../01-useState/CounterApp.css'

const MultipleCustomHooks = () => {

    const {counter, increment } = useCounter(63)

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote, character } = !!data && data[0];

    let imgAuthor = '';
    if(character && character[0]){
        imgAuthor = character[0].img;
    }
    else{
        imgAuthor = 'https://via.placeholder.com/500?text=No+Photo+Found'
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <div className="card card-counter m-3">
                        <div className="card-header counter-text" >
                            Breaking Bad Quotes
                        </div>
                        <img src={imgAuthor} className="card-img-top card-photo" alt={author} />
                        <div className="card-body">
                            <p ></p>
                            {
                                loading ?
                                    (
                                        <div className="alert alert-info text-center w-100">
                                            Cargando ...
                                        </div>
                                    )
                                    :
                                    (
                                        <blockquote className="blockquote text-end">
                                            <p className="mb-4">{quote}</p>
                                            <footer className="blockquote-footer">{author}</footer>
                                        </blockquote>
                                    )
                            }
                        </div>
                        <div className="card-footer">
                            <button className="btn-next-quote" onClick={increment}>Siguiente quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MultipleCustomHooks

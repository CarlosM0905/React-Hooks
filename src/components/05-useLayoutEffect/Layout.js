import React, { useLayoutEffect, useRef } from 'react'
import useCounter from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './Layout.css'

const Layout = () => {

    const { counter, increment } = useCounter(63)

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote, character } = !!data && data[0];

    let imgAuthor = '';
    if (character && character[0]) {
        imgAuthor = character[0].img;
    }
    else {
        imgAuthor = 'https://via.placeholder.com/500?text=No+Photo+Found'
    }

    const pTag = useRef()

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect())
    }, [quote])

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
                            <blockquote className="blockquote">
                                <p ref={pTag} className="mb-4">{quote}</p>
                            </blockquote>
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


export default Layout;

import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted  = useRef(true)
    const [state, setState] = useState({ error: null, loading: true, data: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        async function getData() {
            setState({error: null, loading: true, data: null});

            
            let charactersUrl = 'https://www.breakingbadapi.com/api/characters';
            const characters = await (await fetch(charactersUrl)).json();

            fetch(url)
                .then(resp => resp.json())
                .then((data) => {

                    const characterSearched = characters.filter(character => {
                        return character.name === data[0].author
                    });
                    data[0].character = characterSearched;
                    
                    if(isMounted.current){
                        setState({
                            error: null,
                            loading: false,
                            data
                        })
                    }
                    else{
                        console.log('Componente desmontado, no se cambia el estado')
                    }

                })
        }
        getData();
    }, [url]);

    return state;
}

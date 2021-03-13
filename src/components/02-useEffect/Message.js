import React, { useEffect, useState } from 'react'

const Message = () => {
    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });

    const {x, y} = coords;

    useEffect(() => {
        console.log('Componente montado');

        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y};
            setCoords(coords);
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    })

    return (
        <div>
            <p className="text-center text-info">Eres genial</p>
            <p className="text-center text-success">x: {x}  y: {y}</p>
        </div>
    )
}

export default Message;

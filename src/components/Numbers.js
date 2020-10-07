import React, { useState } from 'react'

const Numbers = () => {
    const [number, setNumber] = useState(0)
    const [menos, setMenos] = useState()


    return (
        <div>
            <p>El numero es: {number}</p>
            <button onClick={() => {
                setNumber(number +1);
            }}>Incrementar</button>
            <button onClick={() => {
                if (number >= 0)
                setNumber(number -1)
            }}>Restar</button>
        </div>
    )
}

export default Numbers

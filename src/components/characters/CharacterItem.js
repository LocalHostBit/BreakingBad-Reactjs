import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.img} alt='{item.name}'/>
                </div>
                <div className='card-back'>
                <h1>{item.name}</h1>
                <ul>
                    <li>
                        <strong>Nombre del Actor:</strong> {item.portrayed}
                    </li>
                    <li>
                        <strong>Cumpleaños:</strong> {item.birthday}
                    </li>
                    <li>
                        <strong>Nombre en la serie:</strong> {item.nickname}
                    </li>
                    <li>
                        <strong>¿Vive en la serie?:</strong> {item.status}
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem

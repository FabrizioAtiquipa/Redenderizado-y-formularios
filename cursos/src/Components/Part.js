import React from 'react';
//Fundamentals of React 10-Using props to pass data 7-State of a component 14
export default function Part(props) {
    const { enunciado, ejercicio} = props
    return (
        <div >
            <p>
                {enunciado} {ejercicio} 
            </p>
        </div>
    )
}


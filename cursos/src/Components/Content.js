import React from 'react';
import Part from "./Part";
//Mapea los valores
export default function Content(props){
    const reducer =(accumulator,p) => accumulator + p.exercises
    const total=props.parts.reduce(reducer,0)
    return (
        <div>
            {
                props.parts.map((part, index) => {
                    const { id,name,exercises } = part
                    return (
                        <Part key={id} enunciado={name} ejercicio={exercises} ></Part>
                    );
                })
            }
            <p>Suma Total: {total}</p>

        </div>
    )
}






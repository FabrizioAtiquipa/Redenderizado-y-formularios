export default  function  Persona(props){

    return (
        <ul>
            {
                props.data.map((person, index) => {
                    const {nombre,numero} = person
                    return (
                        <li key={nombre}>{nombre}  {numero}</li>
                    );

                })
            }
        </ul>
    )
}



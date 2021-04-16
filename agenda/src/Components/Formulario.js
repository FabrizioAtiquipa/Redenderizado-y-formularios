export default function  Formulario(props){
const {Agregar,Agregarnum,nombre,numero,Guardar} = props
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    name: <input type="text" onChange={Agregar} value={nombre} />
                </div>
                <div>
                    number: <input type="number" onChange={Agregarnum} value={numero} />
                </div>
                <div>
                    <button onClick={Guardar}>add</button>
                </div>
            </form>
        </div>
    )
}


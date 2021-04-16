export default function Filtro(props) {
    const {Buscar,filtro} = props
    return (
            <div>
                filter shown with: <input type="text" onChange={Buscar} value={filtro} />
            </div>

    )
}


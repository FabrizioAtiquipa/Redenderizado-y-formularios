import ReactDOM from "react-dom";
import React, { useState } from "react";

const App = () => {
  const [persona, setPersona] = useState([{ nombre: "Arto Hellas" }]);
  const [nuevonom, setNuevoNombre] = useState("");

  const Guardar = (event) => {
    event.preventDefault();

    const nuevaPersona = {
      nombre: nuevonom,
    };




    let respetidos = persona.filter((person) => {
      return person.nombre === nuevonom;
    });

    console.log(respetidos);

    if (respetidos.length > 0) {
      alert(`${nuevaPersona.nombre} ya existe `);
      return;
    }

    setPersona([...persona, nuevaPersona]);

    setNuevoNombre("");
  };

  const Agregar = (event) => {
    setNuevoNombre(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input type="text" onChange={Agregar} value={nuevonom} />
        </div>
        <div>
          <button onClick={Guardar}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persona.map((person, index) => {
          const { nombre } = person;
          return <li key={nombre}>{nombre}</li>;
        })}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

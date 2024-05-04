import { useState } from "react";
import "./App.css";

function App() {
  const [listado, setListado] = useState([]); //Hooks
  const [tarea, setTarea] = useState("");

  return (
    <div className="App">
      <header className="App-header">TO-DO LIST EN REACT</header>
      <div style={{ width: "50%", margin: "auto" }}>
        <section style={{ marginTop: "20px" }}>
          <input
            id="tarea"
            name="tarea"
            placeholder="Ingresar descripción de tarea"
            style={{ padding: "5px" }}
            onChange={(e) => {
              setTarea(e.target.value);
            }}
          />
          <button
            id="agregar"
            style={{ padding: "5px", marginLeft: "5px" }}
            onClick={() => setListado([...listado, tarea])}
          >
            Agregar Tarea
          </button>
        </section>
        <section style={{ textAlign: "left", marginTop: "20px" }}>
          {listado.map((item, i) => {
            return (
              <label style={{ display: "block" }}>
                {i} - {item}
              </label>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default App;

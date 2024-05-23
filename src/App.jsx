import { useState } from "react";
import "./App.css";

const laberinto = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
function App() {
  const [posicion, setPosicion] = useState({ x: 1, y: 1 });
  const [objective, setObjective] = useState({ x: 5, y: 3 });
  const [visitados, setVisitados] = useState([]);
  const [grafo, setGrafo] = useState([]);
  const getAdyacentes = (posicion, lado) => {
    let nodo = {
      posicion: { x: 0, y: 0 },
      canGo: 0,
    };
    switch (lado) {
      case 0:
        return {
          ...nodo,
          posicion: { x: posicion.x, y: posicion.y - 1 },
          canGo: laberinto[posicion.y - 1][posicion.x],
          objective:
            objective.x === posicion.x && objective.y === posicion.y - 1,
        };
      case 1:
        return {
          ...nodo,
          posicion: { x: posicion.x + 1, y: posicion.y },
          canGo: laberinto[posicion.y][posicion.x + 1],
          objective:
            objective.x === posicion.x + 1 && objective.y === posicion.y,
        };
      case 2:
        return {
          ...nodo,
          posicion: { x: posicion.x, y: posicion.y + 1 },
          canGo: laberinto[posicion.y + 1][posicion.x],
          objective:
            objective.x === posicion.x && objective.y === posicion.y + 1,
        };
      case 3:
        return {
          ...nodo,
          posicion: { x: posicion.x - 1, y: posicion.y },
          canGo: laberinto[posicion.y][posicion.x - 1],
          objective:
            objective.x === posicion.x - 1 && objective.y === posicion.y,
        };
    }
  };
  const handleAcction = () => {
    // generar rutas
    const ayacentes = [];
    for (let i = 0; i < 4; i++) {
      ayacentes.push(getAdyacentes(posicion, i));
    }
    console.log(ayacentes);
  };
  return (
    <div>
      <div
        style={{
          displat: "flex",
          flexDirection: "column",
        }}
      >
        {laberinto.map((fila, y) => {
          return (
            <div
              key={y}
              style={{
                display: "flex",
              }}
            >
              {fila.map((celda, x) => {
                return (
                  <div
                    key={x}
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: celda === 1 ? "black" : "white",
                    }}
                  >
                    {posicion.x === x && posicion.y === y && (
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "red",
                        }}
                      ></div>
                    )}
                    {objective.x === x && objective.y === y && (
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "green",
                        }}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          handleAcction();
        }}
        style={{
          margin: "10px",
          backgroundColor: "blue",
        }}
      >
        Accion
      </button>
    </div>
  );
}

export default App;

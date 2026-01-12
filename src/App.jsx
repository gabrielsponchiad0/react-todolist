import { useState } from "react";
import Button from "./Button";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function AdicionarTarefa() {
    if (task.trim() === "") return;
    if (list.some(item => item.text === task)) return;

    setList([...list, { text: task, completed: false }]);
    setTask("");
  }

  function RemoverTarefa(index) {
    const novaLista = list.filter((_, i) => i !== index);
    setList(novaLista);
  }

  function StatusTarefa(index) {
    const novaLista = list.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setList(novaLista);
  }

  return (
    <>
      <div className="container">
        <h1 className="name-task">Lista de Tarefas</h1>

        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <Button
          className="button-add"
          texto="Adicionar"
          onClick={AdicionarTarefa}
        />
      </div>

      <div className="container1">
        <ul className="list-task">
          {list.map((item, index) => (
            <li
              key={index}
              className="task"
              style={{
                opacity: item.completed ? 0.6 : 1
              }}
            >
              <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                {item.text}
              </span>

              <Button
                className="button-ok"
                texto={item.completed ? "Concluído" : "Concluir"}
                onClick={() => StatusTarefa(index)}
              />

              <Button
                className="button-remove"
                texto="Remover"
                onClick={() => RemoverTarefa(index)}
              />
            </li>
          ))}
        </ul>

        <p>Total de tarefas: {list.length}</p>
        <p>
          Concluídas: {list.filter(item => item.completed).length}
        </p>
      </div>
    </>
  );
}

export default App;

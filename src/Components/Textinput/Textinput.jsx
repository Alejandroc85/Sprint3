import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Textinput.css"
const TodoList = () => {
  const [tareas, setTareas] = useState([
    { id: 1, content: "Tomar agua", completed: true },
    {
      id: 2,
      content: "Finalizar práctica de estados y props",
      completed: false,
    },
    { id: 3, content: "Tomar agua", completed: false },
    {
      id: 4,
      content: "Compartir lo aprendido con algún compañero",
      completed: false,
    },
    { id: 5, content: "Probar pizza italiana", completed: false },
    { id: 6, content: "Completar el desafío del sprint 3", completed: false },
  ]);

  const [inputTarea, setInputTarea] = useState("");
  const [filtroTareas, setFiltroTareas] = useState("all");
  const handleEliminarTarea = (id) => {
    setTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id));
  };
  const handleClearCompleted = () => {
    setTareas((prevTareas) => prevTareas.filter((tarea) => !tarea.completed));
  };
  const handleChange = (event) => {
    setInputTarea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputTarea.trim() !== "") {
      const nuevaTarea = {
        id: uuidv4(),
        content: inputTarea,
        completed: false,
      };
      setTareas([...tareas, nuevaTarea]);
      setInputTarea("");
    }
  };
  const handleToggleCompletada = (id) => {
    setTareas((prevTareas) => {
      const nuevasTareas = prevTareas.map((tarea) => {
        if (tarea.id === id) {
          return {
            ...tarea,
            completed: !tarea.completed,
          };
        }
        return tarea;
      });
      return nuevasTareas;
    });
  };
  const tareasNoCompletadas = tareas.filter((tarea) => !tarea.completed);
  return (
    <div className="shadow-xl w-[90%]">
      <form onSubmit={handleSubmit}>
        <input
          className="h-16 px-8 rounded-lg w-[100%] mb-5 bg-veryLightGray text-veryDarkGrayishBlue dark:bg-VeryDarkDesaturatedBlueDM dark:text-LightGrayishBlueDM"
          type="text"
          value={inputTarea}
          onChange={handleChange}
          placeholder="Agregar un nuevo TODO"
        />
        <button type="submit"></button>
      </form>
      <ul className="[&>li:first-child]:rounded-t-xl divide-y divide-lightGrayishBlue dark:divide-VeryDarkGrayishBlueDM dark:[&>li]:bg-VeryDarkDesaturatedBlueDM dark:text-LightGrayishBlueDM ">
        {tareas
          .filter((tarea) => {
            if (filtroTareas === "active") {
              return !tarea.completed;
            } else if (filtroTareas === "completed") {
              return tarea.completed;
            } else {
              return true;
            }
          })
          .map((tarea) => (
            <li
              key={tarea.id}
              className={`flex items-center justify-between h-16 bg-veryLightGray text-veryDarkGrayishBlue dark:text-LightGrayishBlueDM ${
                tarea.completed ? "completada" : ""
              }`}
            >
              <div className="flex justify-around">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={tarea.completed}
                  onChange={() => handleToggleCompletada(tarea.id)}
                />
                {tarea.content}
              </div>
              <button className="mr-[10px]" onClick={() => handleEliminarTarea(tarea.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path
                    fill="#494C6B"
                    fill-rule="evenodd"
                    d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                  />
                </svg>
              </button>
            </li>
          ))}
      </ul>
      <div className="flex bg-veryLightGray rounded-b-xl h-20 flex-col dark:text-LightGrayishBlueDM  dark:bg-VeryDarkDesaturatedBlueDM ">
        <div className="flex justify-around mb-[15px] lg:hidden">
          <span>{tareasNoCompletadas.length} Items left </span>
          <span onClick={handleClearCompleted}>Clear Completed</span>
        </div>
        <div className="flex justify-around lg:hidden">
          <span onClick={() => setFiltroTareas("all")}>All</span>
          <span onClick={() => setFiltroTareas("active")}>Active</span>
          <span onClick={() => setFiltroTareas("completed")}>Completed</span>
        </div>
        <div className="hidden lg:flex justify-around">
          <span>{tareasNoCompletadas.length} Items left </span>
          <div className="flex gap-[20px]">
          <span onClick={() => setFiltroTareas("all")}>All</span>
          <span onClick={() => setFiltroTareas("active")}>Active</span>
          <span onClick={() => setFiltroTareas("completed")}>Completed</span>
          </div>
          <span onClick={handleClearCompleted}>Clear Completed</span>
        </div>
      </div> 
    </div>
  );
};

export default function Searchbar() {
  return <TodoList />;
}

import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1 className="h1">Lista de Tareas Valentin Gimenez</h1> 
      <div className='container'>
      <input type="text" className="inputStyle" placeholder="Escribe una nueva tarea" />
    <button className="ButtonStyle">ADD</button>
      </div>
      <l1 className="tasksStyle" > <div className="checkboxStyle"></div>Task 1<div className="trashContainer"></div></l1>
      <l1 className="tasksStyle" > <div className="checkboxStyle">✔</div><del>Finished Task1</del><div className="trashContainer"></div></l1>
      <l1 className="tasksStyle" > <div className="checkboxStyle"></div>Task 3<div className="trashContainer"></div></l1>
      <l1 className="tasksStyle" > <div className="checkboxStyle"></div>Task 4<div className="trashContainer"></div></l1>
      <l1 className="tasksStyle" > <div className="checkboxStyle">✔</div><del>Finished Task2</del><button className="trashContainer"></button></l1>
      
      
    </>

  )
}

export default App

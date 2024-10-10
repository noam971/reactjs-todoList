import { useState, useEffect } from "react"
import Todoinput from "./components/Todoinpput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function presistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos:
      newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    presistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndes) => {
      return todoIndes !== index
    })
    presistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodos(index) {
    const editedValue = todos[index]
    setTodoValue(editedValue)
    handleDeleteTodos(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <Todoinput todoValue={todoValue} 
      setTodoValue={setTodoValue}
       handleAddTodos={handleAddTodos} />
      <TodoList todos={todos}
        handleDeleteTodos={handleDeleteTodos} 
        handleEditTodos={handleEditTodos} />
      
    </>
  )
}

export default App

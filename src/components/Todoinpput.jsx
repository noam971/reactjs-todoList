import { useState } from "react"

export default function Todoinput(props) {
    const { todoValue, setTodoValue, handleAddTodos } = props
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }}
            onKeyDown={(e) => {
                if (e.key != "Enter") {
                    return
                }
                if (!todoValue) { 
                    return
                }
                handleAddTodos(todoValue)
                setTodoValue('')
            }}
             placeholder="Enter todo..." />
            <button onClick={() => {
                if (todoValue) {
                    handleAddTodos(todoValue)
                    setTodoValue('')
                }
            }
            }>add</button>
        </header>
    )
}
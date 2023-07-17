import React, {useState} from "react";

function TodoList () {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState ([])
    


const handleSubmit = (e) => {
    setTodos(prev => [...prev, todo])
    setTodo ('')
}


return (
    <>
        <div>
            <h1>Todo List</h1>
        </div>
      <input 
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
        ))}
      </ul>

    </>
)
}

export default TodoList
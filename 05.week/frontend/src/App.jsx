import { useState } from 'react'
import CreateTodo from './components/createTodo'
import { Todos } from './components/todos'

function App() {
  const [todos, setTodos] = useState([]);

  fetch('http://localhost:8080/todo')
  .then(async (res)=>{
    console.log(res);
    
    const data = await res.json();
    setTodos(data.allTodos); // sending the arrays 
  })

  console.log(todos);
  
  return (
    <div className='bg-gray-400 w-full h-full'>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App

import { useState } from 'react'
import Example from './pricing'
import CreateTodo from './components/createTodo'
import { Todos } from './components/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-400 w-full h-full'>
      <CreateTodo></CreateTodo>
      <Todos></Todos>
    </div>
  )
}

export default App

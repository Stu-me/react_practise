import { useState } from 'react'
import CreateTodo from './components/createTodo'
import { Todos } from './components/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-400 w-full h-full'>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {title:"asd",
          description:"asdfdfd",
          completed:false
        },
        {
          title:"bsd",
          description:"by tko",
          completed:false
        }
        ]}></Todos>
    </div>
  )
}

export default App

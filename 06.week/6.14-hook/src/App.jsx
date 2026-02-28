import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  // this example fetches a *single* todo from the JSONPlaceholder API
  // the response for `/todos/<id>` is an object, not an array, and there is
  // no `todos` property on it. the original code therefore set the state to
  // `undefined` which is why nothing showed up.
  const [todo, setTodo] = useState(null);
  const [counter , setCounter] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${counter}`)
      .then(res => {
        // store the whole object (or `res.data.title` if you only care about the title)
        setTodo(res.data);
        
      })
      .catch(err => console.error(err));
  }, [counter]);
  

  return (
    <>
    <button className='border-2 p-2 m-3 rounded-b-sm bg-gray-300' 
    onClick={()=>{setCounter(counter+1)}}
    >Click me</button>
    <div>{counter}</div>
    {/* display the title or raw data */}
    <div className='text-3xl bg-black text-amber-50'>{todo ? todo.title : 'loading...'}</div>
    </>
  )
}

export default App

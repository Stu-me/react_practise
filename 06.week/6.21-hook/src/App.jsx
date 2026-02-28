import { useState,useEffect } from 'react'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <button className='p-2 m-2 bg-gray-100 border-1'>1</button>
     <button className='p-2 m-2 bg-gray-100 border-1'>2</button>
     <button className='p-2 m-2 bg-gray-100 border-1'>3</button>
     <button className='p-2 m-2 bg-gray-100 border-1'>4</button>
    </>
  )
}

export default App

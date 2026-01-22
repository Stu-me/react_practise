import { useState } from 'react'
import './App.css'

function App() {
 const [count,setcount] = useState(0);
 console.log(count);
 console.log(setcount);
 
 function countHandler(){
  setcount(count+1) // we have to write the code like this to work 
 }

  return (
    <div>
      we are in the app.jsx 
      <button onClick={countHandler}>Counter {state.count}</button>
    </div>
  )
}

export default App

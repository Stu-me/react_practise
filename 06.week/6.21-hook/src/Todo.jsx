import axios from 'axios';
import React, { useEffect } from 'react'

function Todo({id}) {
    const [todo,setTodo] = userState({});

    useEffect(()=>{
        axios.get("")
    })

  return (
    <div>Todo</div>
  )
}

export default Todo
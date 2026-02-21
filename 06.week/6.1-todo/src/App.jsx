import { useState } from "react";
import Todo from "./components/InputTodo";

function App() {
  const [arr, setArr] = useState([
    { title: "1st task", description: "create a todo component" },
    { title: "2nd Task", description: "Initialize a state array " },
    { title: "3rd Task", description: " Iterate the array to render" },
  ]);
  const [title,setTitle] = useState("Default-Title");
  const [description,setDescription] = useState("Default-description")

  return (
    <div>
      <div id="addTodo" className="m-3 p-4" >
        <input className="border-2 bg-white text-black m-2" placeholder="  Title" 
        onChange={
          (e)=>{
            setTitle(e.target.value);
          }
        }
        /> <br />
        <input className="border-2 bg-white text-black m-2" type="description" placeholder="Description" 
        onChange={
          (e)=>{
            setDescription(e.target.value);
          }
        }
        /><br />
        <button className="m-2 p-2 rounded-b-md border-2 bg-blue-100 text-black"
        onClick={()=>setArr([...arr,{title,description}])}
        >Add todo</button>
      </div>

      <div id="todo_display" className="flex-col">
        <h1 className="bg-amber-50 w-3/13 m-5 p-2 border-2">List of todos</h1>
        {arr.map((ele) => {
          return (
            <>
              <Todo title={ele.title} description={ele.description}></Todo>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;

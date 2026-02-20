import { useState } from "react";

export default function CreateTodo() {
    // react-query
    const [title,setTitle] = useState("d");
    const [description,setDescription] = useState("d");

    return <>
        <input type="text" placeholder="Title" className="border-2 align-middle p-1 m-1 bg-white" onChange={(e)=>{
            const value  = e.target.value;
            setTitle(value);
        }} /><br />
        <input type="text" placeholder="Description" className="border-2 align-middle p-1 m-1 bg-white" onChange={(e)=>{
            setDescription(e.target.value);
        }} /><br />

        <button className=" m-5 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
         onClick={()=>{
            fetch("http://localhost:8080/todo",{
                method:"POST",
                body:JSON.stringify({
                   title:title,
                   description:description,
                   completed: false,
                   important: false,
                   star: false
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(async (res)=>{
                const data = await res.json();
                alert("todo added");
            })
         }}
        >
            Add todo
        </button>
    </>
}


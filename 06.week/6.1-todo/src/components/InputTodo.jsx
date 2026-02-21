import { useState } from "react";

export default function InputTodo(props){

    return (
        <>
        <div className="text-3xl uppercase bg-fuchsia-200 w-1/6 m-2 p-1 border-4">{props.title}</div>
        <div className="text-3xl  bg-red-300 w-3/6 m-2 p-1 " >{props.description}</div>
        </>
    )

}
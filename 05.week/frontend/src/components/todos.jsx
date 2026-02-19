
// we will be getting toods as array = [{},{},{}]


export function Todos({todos = []}){
  return <div>
    {
        todos.map((todo)=>{
            return <div key = {todo.id}>
                <h1 className="border-2 align-middle p-1 m-1 w-4/12 bg-amber-50 rounded-xl">{todo.title}</h1>
                <h2 className="border-2 align-middle p-1 m-1 bg-amber-100 w-4/12">{todo.description}</h2>
                <button className="m-5 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">{todo.completed == true ? "completed" :"Mark as completed"}</button>
            </div>
        })
    }
  </div>
}

// made the function that takes the array and show its title , decription and completion status for all the object
// also it takes the array as todos with title , description and completion 
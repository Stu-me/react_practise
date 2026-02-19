
export default function CreateTodo() {
    return <>

        <input type="text" placeholder="Title" className="border-2 align-middle p-1 m-1" /><br />
        <input type="text" placeholder="Description" className="border-2 align-middle p-1 m-1" /><br />

        <button class=" m-5 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Add to do
        </button>
    </>
}


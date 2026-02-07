import { useState } from 'react'


function Button(props){
    function clickHandler(){
      props.fnCnt(props.count+1)
    }
    return(
      <>
      <p className='text-2xl bg-green-300'> So babu saheb we made this button for you </p>
      <button onClick={clickHandler} className='border-2 px-5 m-3 rounded-sm bg-amber-200 text-[30px]' >{props.count}</button>
      </>
      
    )
  }


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-2xl text-center bg-[#f8b771]'>
        tailwind connected
      </div>
      <Button count={count} fnCnt={setCount}></Button>
    </>
  )
}

export default App

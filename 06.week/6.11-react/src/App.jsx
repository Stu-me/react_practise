import { useState, memo } from "react";
import Header from "./components/headers";

function App() {
  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title=" 1st " desc=" trial 1 "></Header>
      <Header title=" 2nd " desc=" trial 2 "></Header>
      <Header title=" 3rd" desc=" trial 3 "></Header>
      <NoEffect></NoEffect>
    </>
  );
}
function HeaderWithButton() {
  const [title, setTitle] = useState("My name is Sundram kumar");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }


  return (
    <>
      <button className="bg-amber-500 p-2  m-3" onClick={updateTitle}>
        Click-me
      </button>
      <div className="bg-white">{title}</div>
      <div className="bg-white text-2xl"> being rendered for no reason</div>
      <NoEffect></NoEffect>
    </>
  );
}
const NoEffect = memo(  function NoEffect() {
    return (
      <>
        <div className="bg-white text-2xl"> being rendered for no reason</div>
        <div className="bg-white text-2xl"> being rendered for no reason</div>
        <div className="bg-white text-2xl"> being rendered for no reason</div>
        <div className="bg-white text-2xl"> being rendered for no reason</div>
      </>
    );
  })

export default App;

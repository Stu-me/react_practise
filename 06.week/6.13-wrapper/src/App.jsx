import { useState } from "react";
import CardWrapper from "./components/Card";
import Title from "./components/Title";

function App() {
  return <>
  
  <CardWrapper>
    <Title>It is kinnda cool man 😀 </Title>
  </CardWrapper>

  <CardWrapper>So what we will send it will do </CardWrapper>

  <CardWrapper>
    <CardWrapper>
      <CardWrapper>
        multi - wrapper
      </CardWrapper>
    </CardWrapper>
  </CardWrapper>
  
  </>;

  // return (
  //   <>
  //   <CardWrapper innerComponent = {<Title/>}></CardWrapper>
  //   <CardWrapper innerComponent = {<Title/>}></CardWrapper>
  //   <CardWrapper innerComponent = {<Title/>}></CardWrapper>
  //   </>
  // )
}

export default App;

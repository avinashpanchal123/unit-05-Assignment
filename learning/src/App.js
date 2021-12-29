import logo from "./logo.svg";
import "./App.css";
// import { useRef, useRef, useState } from 'react';
import { buildQueries } from "@testing-library/react";

function App({ nums }) {
  const style = {
    color: "red",
  };

  return (
    <div className="App">
    
      {/* <input 
      onInput={(e) => {
        // console.log(inputRef.current.value);
      }}
      placeholder="onBlur is triggered when you click this input and then you click outside of it."
    />
    <button>print</button>
    <img  src={logo}></img> */}
      <Heading text={"Mobile Operating System"} />
      <Disc text={"Android"} />
      <Disc text={"Blackberry"} />
      <Disc text={"iPhone"} />
      <Disc text={"Windows Phone"} />

      <Heading text={"Mobile Manufacturers"} />
      <Square text={"Samsung"}/>
      <Square text={"HTC"}/>
      <Disc text={"Micromax"} />
      <Circle text={"Micromax"} />
    </div>
  );
}

function Heading({ text }) {
  return <h1 style={{
    paddingLeft :"30%"
  }}>{text}</h1>;
}

function Disc({ text }) {
 
  return (
    <div style={{
      paddingLeft :"30%"
    }}>
      <ul>
        <li>{text}</li>
      </ul>
    </div>
  );
}

function Square ({text}){
  return (
    <div style={{
      paddingLeft :"30%"
    }}>
       <ul>
        <li style={{listStyleType: "square"}}>{text}</li>
      </ul>
    </div>
  )
}
function Circle ({text}){
  return (
    <div style={{
      paddingLeft :"30%"
    }}>
       <ul>
        <li style={{listStyleType: "circle"}}>{text}</li>
      </ul>
    </div>
  )
}

export default App;

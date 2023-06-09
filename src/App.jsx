import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const output = fetch("https://jsonplaceholder.typicode.com/albums");
  console.log(output);

  album
    .then((rightSong) => rightSong.json())
    .then((data) => console.log(data))
    .catch((wrongSong) => console.log(wrongSong));

  return <div>App</div>;
}

export default App;

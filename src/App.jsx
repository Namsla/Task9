import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//ask 9: Handling Promises with JSONPlaceholder API Endpoint #1

//The result after changing the url address

function App() {
  const output = fetch("https://jasonplaceholder.typicode.com/albms");
  console.log(output);

  album
    .then((rightSong) => rightSong.json())
    .then((data) => console.log(data))
    .catch((wrongSong) => console.log(wrongSong));

  return <div>App</div>;
}

export default App;

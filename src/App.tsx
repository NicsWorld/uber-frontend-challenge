import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Shape } from "./Shape.tsx";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    "1",
    "1",
    "1",
    "1",
    "0",
    "0",
    "1",
    "1",
    "1",
  ]);

  return <Shape data={data} />;
}

export default App;

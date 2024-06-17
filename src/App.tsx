import { useState } from "react";
import "./App.css";
import { Shape } from "./Shape.tsx";

function App() {
  const [data, setData] = useState([
    "1",
    "1",
    "1",
    "0",
    "0",
    "1",
    "1",
    "1",
    "1",
  ]);
  const [controlPanelData, setControlPanelData] = useState([
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ]);

  return (
    <div className="shape-wrapper">
      {/* <div className="control-panel-wrapper">
        <h1>Control panel</h1>

        <div className="control-panel">
          {data.map((item: any, index: any) => {
            return (
              <button
                // className={`${squareVisibility} square ${isSelected && "green"}`}
                className="control-panel-square"
                key={index}
                data-index={index}
                // data-status={squareVisibility}
              ></button>
            );
          })}
        </div>
      </div> */}

      <Shape data={data} />
    </div>
  );
}

export default App;

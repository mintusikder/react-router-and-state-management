import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DasyNav from "./assets/component/DasyNav";
import Line from "./assets/component/Line";
import PriceOption from "./assets/component/PriceOption";
import LineChart from "./assets/component/LineChart";
import Chart from "./assets/component/Chart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <LineChart></LineChart> */}
    <Line ></Line>
    <DasyNav></DasyNav>
        <Chart></Chart>
    <PriceOption></PriceOption>
      <div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-7xl bg-amber-400">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

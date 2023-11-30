import { useState } from "react";
import "./App.css";
import { ContextDemo } from "./ContextDemo";
import { ZustandDemo } from "./ZustandDemo";

function App() {
  const [demo, setDemo] = useState("context");

  return (
    <>
      <select className="p-2 rounded-md" onChange={(e) => setDemo(e.currentTarget.value)}>
        <option value="context" selected>
          React Context
        </option>
        <option value="zustand">Zustand</option>
      </select>

      {demo === "zustand" && <ZustandDemo />}
      {demo === "context" && <ContextDemo />}
    </>
  );
}

export default App;

import "./App.css";
import { Adder } from "./Adder.js";
import { Tasks } from "./Tasks.js";

export function App() {
  return (
    <div className="app">
      <Adder />
      <Tasks />
    </div>
  );
}

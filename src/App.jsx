import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./assets/Nav";
import User from "./assets/User";
import Pagination from "./assets/Pagination";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <div className="user-container">
        <User />
        <User />
      </div>
      <Pagination />
    </div>
  );
}

export default App;

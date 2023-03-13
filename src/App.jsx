import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <UserDetails />
    </div>
  );
}

export default App;

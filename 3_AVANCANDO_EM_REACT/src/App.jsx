import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import City from "./assets/city.jpg";
import ManageDatas from "./comonents/ManageDatas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <h1>Avançando em React</h1>
        {/* Imagem em public*/}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        {/* Imagem em asset */}
        <div>
          <img src={City} alt="Cidade" />
        </div>
        <ManageDatas/>
      </div>
    </>
  );
}

export default App;

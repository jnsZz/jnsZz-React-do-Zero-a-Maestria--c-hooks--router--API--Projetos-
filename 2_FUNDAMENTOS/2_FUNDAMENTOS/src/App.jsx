import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstComponents from "./components/FIrstComponents";
import TemplateExpressions from "./components/TemplateExpressionss";
import MyComponents from "./components/Mycomponents";
import Events from "./components/Events";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <FirstComponents />
        <TemplateExpressions/>
        <MyComponents/>
        <Events/>
      </div>
    </>
  );
} 

export default App;

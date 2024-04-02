import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer"

// npm create vite@latest dragpmnball-app
// npm run dev -- Para inicializar
// npm dev : "vite", // start dev server, aliases: `vite dev`, `vite serve`
// npm build : "vite build", // build for production
// npm preview : "vite preview" // locally preview production build
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header/>
        <Main/>
        <Footer/>
        </div>
    </>
  );
}

export default App;

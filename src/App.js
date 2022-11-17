import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from "./home";
import Game from "./game";
import './bulma/css/bulma.min.css';
import {useState} from 'react'

function App() {
  return (
    <BrowserRouter>
    <div>
       <MiComponente number="6" text="Me puedo cambiar de color"/>
    </div>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/game" element ={<Game/>}/>
    </Routes>

    </BrowserRouter>
  );
}

function MiComponente ({number, text}) {
  const [textColor, setTextColor] = useState("red")
  return (
    <>   
        <span>{number}</span>
        <br/> 
        <span style={{color: textColor}}>{text}</span>
        <button onClick={() => setTextColor("Blue")}>Cambiar de color</button>
    </>
  );
}



export default App;

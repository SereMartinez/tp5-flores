import Button from "../Components/boton.js";
import {useNavigate} from "react-router-dom";
import background from "../assets/imagen1.jpg";
import background2 from "../assets/imagen3.jpg";
import {useState} from "react";
import "./homestyles.css"


function Home (){
    const navigate=useNavigate();

    const onClickButton=(url) => {
        navigate(url);
    }

    const [changeBackground, setChangebackground]=useState(background)

    return (
    <section className='hero is-medium is-fullheight' style={{backgroundImage:`url(${changeBackground})`,
        backgroundSize:"cover"}}>;
    <div className="hero-body">
        <div className="container has-text-centered">
                  <Button onClick={()=>onClickButton("/game")} text="Empezar"/>
                  <button className="button2 is-primary is-large" onClick={()=>setChangebackground(background2)}>Cambiar fondo</button>  
        
        </div>   
    </div>
    </section>
    )
}
export default Home;

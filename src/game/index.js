import { Link } from "react-router-dom";
import {useEffect} from "react";
import {useState} from "react";
import QuestionCard from "../Components/QuestionCard";

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter"

function Game () {
    const [ loading, setLoading] = useState (true); 
    const [ questions, setQuestions] = useState ([]);
    const [selectedAnswers,setSelectedAnswers]= useState ([])
    const [result,setResult] = useState (0)
    const [mostrarResultado, setMostrarResultado]= useState (false)

    function calcularResultado () {
        const respuestaCorrectas=selectedAnswers.filter((respuesta)=>respuesta.valorOpcion===true)
        setResult(respuestaCorrectas.length )
        setMostrarResultado(true)
    }

    useEffect(() => {
        fetch(API_URL)
        .then (response => response.json())
        .then(data => setQuestions(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

return(
    <div className='container'>
        <section className='section'>
           <nav class="breadcrumb" aria-label="breadcrumbs">
               <ul>
                  <li><Link to="/">inicio</Link></li>            
                  <li className="is-active"><Link to="/game">Juego</Link></li>
               </ul>

           </nav>
            {
                loading && (
                    <div>Cargando...</div>
                )
            }
            {
                !loading && (
                    <form>
                        {
                            questions.map((pregunta) => {
                               return <QuestionCard key = {pregunta.id}
                               preguntaActual={pregunta}
                               selectedAnswers={selectedAnswers}
                               setselectedAnswers={setselectedAnswers}
                               mostrarResultado={mostrarResultado}
                               />
                            })
                       }
                    </form>
                   
                )
            }
            <div className="level-right">
            {
                mostrarResultado &&
                <p>{result}</p>
            
            }
        
                <Button disabled={
                    selectedAnswers?.length !== questions?.length
                    } onClick={()=>calcularResultado()} text="Validar"></Button>
            </div>   
            <h1> Estás en el juego </h1>   
         </section>
    </div>
)
}

export default Game;
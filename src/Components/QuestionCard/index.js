import "./index.css";

function QuestionCard ({preguntaActual, selectedAnswers, setselectedAnswers }) { 
    function seleccionarRespuesta (valorOpcional){
        console.log (valorOpcion)
    }
    return (
        < div className="box"> 
            <div className="mi-clase2">
            <span className="tag is-rounded is-info">{preguntaActual.id}</span>
            <span><strong>{preguntaActual.question}</strong></span>
            </div>
            <br/>
            {
                preguntaActual.answers.map((option) => (
                    <div key={option.id} onChange={()=> seleccionarRespuesta(preguntaActual.id,option.is_correct)}>
                        <input type="radio" id={ `${option.id} `} name={option.id} value={option.answer}></input>
                        <label htmlFor={ `${option.id} `}>{option.answer}</label>
                    </div>
                ))  
            }
            <br/>
        
        </div>
    )
}


export default QuestionCard;
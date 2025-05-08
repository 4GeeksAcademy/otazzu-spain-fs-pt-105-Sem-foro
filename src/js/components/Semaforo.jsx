import React, { useState } from "react";
import '../../styles/semaforo.css'

export const Semaforo = () => {

    const [color, setColor] = useState("");
    const [elementMade, setElementMade] = useState(false)

    const onClick = (event) => {
        if(event.target.id === "red"){
            setColor("red")
        }
        if(event.target.id === "yellow"){
            setColor("yellow")
        }
        if(event.target.id === "green"){
            setColor("green")
        }
        if(event.target.id === "purple"){
            setColor("purple")
        }
    }

    const createPurple = () =>{

        if(!elementMade){
            setElementMade(true)
        }

    }

    return (
        <>
            <div id="stick-top"></div>
            <div id="traffic-light">

                <div 

                id="red"
                onClick={onClick}
                className={"light red" + (color === "red" ? " selected": "")}>

                </div>

                <div 
                
                id="yellow"
                onClick={onClick} 
                className={"light yellow" + (color === "yellow" ? " selected": "")}>

                </div>

                <div 

                id="green"
                onClick={onClick} 
                className={"light green" + (color === "green" ? " selected": "")}>

                </div>

                {elementMade && (//Se renderiza solo si es true
                    <div
                    
                    id="purple"
                    onClick={onClick}
                    className={"light purple" + (color === "purple" ? " selected": "")}>

                    </div>
                )}

            </div>

            <button type="button" className="btn btn-success m-3" onClick={createPurple}>Generar Morado</button>
        </>
    );
};
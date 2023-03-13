import React from "react";
import '../App.css'

const CatRandom=({handleClick})=>{

    return (
        <div className="cat-content">
            <button type="button" onClick={ handleClick } >Obtener</button>
        </div>
    )
}

export default CatRandom

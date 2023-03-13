import React, { useEffect, useState } from 'react'
import '../App.css'

function Giphy({word}) {

    const [data, setData] = useState("")

    useEffect(() => {
        cargarApi(word)
    }, [word])
    

    async function cargarApi(worddata){
        if(worddata){
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${worddata}&limit=1&offset=0&rating=g&lang=en`)
            if(response.ok){
                const res = await response.json()
                // console.log(res.data[0].images.original.url);
                setData(res.data[0].images.original.url)
            }
        }
    }

  return (
    <div className='gp-content'>
        <div className='gp-item'>
            <h2>{word}</h2>
            <img src={data} width="100%" alt="" />
        </div>
    </div>
  )
}

export default Giphy        
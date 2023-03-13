import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CatRandom from './components/CatRandom'
import Giphy from './components/Giphy'

function App() {

  const [words, setWords] = useState({
    word1:'',
    word2:'',
    word3:''
  })

  function obtener3words(nombre){
    const arr = nombre.split(" ")
    const palabra = arr.slice(0,3)
    setWords({
      word1:palabra[0],
      word2:palabra[1],
      word3:palabra[2]
    })
  }

  const handleClick=async ()=>{
    const response = await fetch("https://catfact.ninja/fact?max_length=30")
    if(response.ok){
      const res = await response.json()
      obtener3words(res.fact)
    }

  }
  return (
    <div className="app">
      <div className="app-container">
        <Giphy  word={ words.word1 } />
        <Giphy  word={ words.word2 } />
        <Giphy  word={ words.word3 } />
        <CatRandom handleClick={ handleClick } />
      </div>
    </div>
  )
}

export default App

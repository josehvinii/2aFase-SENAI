import React from 'react'
import { useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'

function Dragoes() {
    const {diaDeHoje, setDiadeHoje} = useContext(GlobalContext)
          
        function trocarDia(){
            let dia = prompt('Que dia hoje? ') 
            setDiadeHoje(dia)
        }
    
  return (
    <div>
        <Navbar />
      <h1>Dragões</h1>
      <p>Porque eles são legalzões, menos no dia {diaDeHoje}</p>
      <button onClick={trocarDia}>Trocar dia</button>
    </div>
  )
}

export default Dragoes

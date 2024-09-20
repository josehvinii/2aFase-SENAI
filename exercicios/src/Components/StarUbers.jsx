import { useState } from 'react'
import './StarUbers.css'

function StarUbers() {
    const [resultado, setResultado] = useState()
    function processarTempo(){

        let distancia = Number(prompt("Digite a distância da corrida (km): "))
        let velocidadeDaLuz = 300000
        let tempo = distancia / velocidadeDaLuz
        

        setResultado(tempo)

        if(tempo >= 60){
        
        }
        
    }
  return (
    <div className='StarUbers'>
    <h2>Exercício para informar o Tempo que leva a viagem</h2>
    <button onClick={processarTempo} className= "processar3">Processar</button>
    {resultado}
  </div>
  )
}

export default StarUbers

import { useState } from 'react'
import './StarUbers.css'

function StarUbers() {
    const [resultado, setResultado] = useState()
    function processarTempo(){

        let distancia = Number(prompt("Digite a distância da corrida (km): "))
        let velocidadeDaLuz = 300000
        let tempo = distancia / velocidadeDaLuz
        let minuto = 60
        let horas = 60
        let dias = 24

        setResultado(tempo)

        if(tempo >= 60){
        conversaoMinutos = tempo / 60
        let tempoMinutos = Number(prompt("O tempo estimado é:  (km): "))
        
        }
        
    }
  return (
    <div className='StarUbers'>
    <h2>Exercício para informar o Tempo que leva a viagem</h2>
    <button onClick={processarTempo}>Processar</button>
    {resultado}
  </div>
  )
}

export default StarUbers

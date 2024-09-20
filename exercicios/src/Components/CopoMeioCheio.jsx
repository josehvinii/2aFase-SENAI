import { useState } from 'react'
import './CopoMeiocheio.css'

function CopoMeioCheio() {
    const [resultado, setResultado] = useState()
    function processarNumero(){

        let numeroDigitado = Number(prompt("Digite um número: "))

        if(numeroDigitado > 0){
            setResultado("Número Positivo")
        }else if(numeroDigitado < 0){
            setResultado("Número Negativo")
        }else{
            setResultado("Nulo")
        }
        
        setResultado(inform)
    }  
  return (
    <div className='CopoMeioCheio'>
      <h2>Exercício para ver se o número digitado é negativo positivo ou Nulo</h2>
      <button onClick={processarNumero} className= "processar2">Processar</button>
      {resultado}
    </div>
  )
}

export default CopoMeioCheio

import { useState } from 'react'
import './DoisCoposMeiocheios.css'

function DoisCoposMeioCheios() {
    const [resultado, setResultado] = useState()
    function processarNumero(){

        let numeroDigitado = Number(prompt("Digite um número: "))

        if(numeroDigitado >= 0 && numeroDigitado % 2 == 0){
            setResultado("Número é par e positivo ao mesmo tempo!")
        }else{
            setResultado("O numero digitado talvez não seja par ou positivo!")
        }
        
        setResultado(inform)
    }  
  return (
    <div className='DoisCoposMeioCheios'>
      <h2>Exercício para ver se o número digitado é par e positivo ao mesmo tempo</h2>
      <button onClick={processarNumero} className= "processar">Processar</button>
      {resultado}
    </div>
  )
}

export default DoisCoposMeioCheios

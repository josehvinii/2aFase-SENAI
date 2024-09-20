import { useState } from 'react'
import './Exemplo.css'

function Exemplo() {

  const [resultado, setResultado] = useState(0)

  function aumentar(){
    setResultado(resultado + 1)
  }

  function diminuir(){
    setResultado(resultado - 1)
  }

  return (
    <div>
    <button onClick={aumentar} className= "botao+">+</button>
    {resultado}
    <button onClick={diminuir} className= "botao-">-</button>
    </div>
  )
}

export default Exemplo

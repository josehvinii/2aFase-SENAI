import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Numeros712() {
    const[inputNumero, setNumero] = useState('')
    const[contagem, setContagem] = useState(0)
    const[Mostrar, setMostrar] = useState(false);

    function lerNumero(){
        if (inputNumero > 100 && inputNumero < 200){
            // alert("Tem que contar esse...")
            setContagem(contagem + 1)
        }
    }
  return (
    <div>
      <Navbar/>
      <h1>Exercício 7.12</h1>
      <input type="text" 
      value={inputNumero}
      onChange={(event) => setNumero(event.target.value)}
      />
      {inputNumero}
      <button onClick={lerNumero}>Ler</button>
      <button onClick={()=>setMostrar(true)}>Resultado</button>
      <div>
        {Mostrar && <p>Números da faixa 100 a 200: {contagem}</p>}
        

      </div>
    </div>
  )
}

export default Numeros712

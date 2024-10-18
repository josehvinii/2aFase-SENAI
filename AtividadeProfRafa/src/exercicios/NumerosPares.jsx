import React from 'react'
import Navbar from '../components/Navbar'

function NumerosPares() {
  const [inputNumero, setNumero] = useState('')
  const [contagem, setContagem] = useState(0)
  const [Mostrar, setMostrar] = useState(false);

  function lerNumero(){
    if (inputNumero > 100 && inputNumero < 200){
        setContagem(contagem + 1)
    }
}





  return (
    <div>
      <Navbar />

      <h1>Exercício 7.13</h1>
      <p>Digite dois números para mostrar os números pares contidos entre eles:</p>
      <input type="number"
      value={inputNumero}
      onChange={(event) => setNumero(event.target.value)}
      />
      <button>Ler</button>
      <button>Resultado</button>
    </div>
  )
}

export default NumerosPares

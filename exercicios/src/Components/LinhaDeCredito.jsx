import { useState } from 'react'
import './LinhaDeCredito.css'

function LinhaDeCredito() {
    const [resultado, setResultado] = useState()
    function processarNumero(){

        let salarioUsuario = Number(prompt("Digite seu salário: "))
        let valorEmprestimo = Number(prompt("Digite o valor do empréstimo: "))
        let numeroDePrestacoes = Number(prompt("Digite o número de prestações: "))

        let valorPrestacao = valorEmprestimo / numeroDePrestacoes
        let valorLimitePrestacao = salarioUsuario * 0.30

        if(valorPrestacao <= valorLimitePrestacao){
            setResultado("O empréstimo pode ser feito!")
        }else{
            setResultado("O empréstimo não pode ser feito!")
        }
        
        setResultado(inform)
    }  
  return (
    <div className='LinhaDeCredito'>
    <h2>Exercício para informar se o empréstimo pode ser concedido</h2>
    <button onClick={processarNumero}>Processar</button>
    {resultado}
  </div>
  )
}

export default LinhaDeCredito

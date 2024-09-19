import { useState } from 'react'
import './LinhaDeCredito.css'
import RelatorioEmprestimo from './RelatorioEmprestimo'

function LinhaDeCredito() {
    const [resultado, setSalario] = useState('')
    const [stateRelatorio, setStateRelatorio] = useState()


    function analizarEmprestimo(){

        let salarioUsuario = Number(prompt("Digite seu salário: "))
        let valorEmprestimo = Number(prompt("Digite o valor do empréstimo: "))
        let numeroDePrestacoes = Number(prompt("Digite o número de prestações: "))

        let valorPrestacao = valorEmprestimo / numeroDePrestacoes
        let valorLimitePrestacao = salarioUsuario * 0.30

        if(valorPrestacao <= valorLimitePrestacao){
            setSalario("O empréstimo pode ser feito!")

            let infosRelatorio = {
              situacao: "aprovado",
              maxPrestacao: valorLimitePrestacao,
              prestacao: valorPrestacao,
              emprestimo: valorEmprestimo,
              prestacoes: numeroDePrestacoes
            }
            setStateRelatorio(infosRelatorio)

        }else{
            setSalario("O empréstimo não pode ser feito!")

            let infosRelatorio = {
              situacao: "reprovado",
              maxPrestacao: valorLimitePrestacao,
              prestacao: valorPrestacao,
              emprestimo: valorEmprestimo,
              prestacoes: numeroDePrestacoes
            }
            setStateRelatorio(infosRelatorio)
        }
        
        setSalario(inform)
    }  
  return (
    <div className='LinhaDeCredito'>
    <h2>Exercício para informar se o empréstimo pode ser concedido</h2>
    <button onClick={analizarEmprestimo} className= "analizarEmprestimo">Analizar emprestimo</button>
    {stateRelatorio && 
    <RelatorioEmprestimo infos={ stateRelatorio }/>}
    {resultado}
  </div>
  )
}

export default LinhaDeCredito

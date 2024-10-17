import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

function Exercicios() {
  return (
    <div>
      <Navbar/>
      <Link to="/numeros712">Atividade 7.12</Link> <br />
      <Link to="/numerosPares">Atividade 7.13</Link>
    </div>
  )
}

export default Exercicios

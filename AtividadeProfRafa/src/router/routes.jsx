import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Numeros712 from "../exercicios/Numeros712";
import Exercicios from "../pages/Exercicios";
import NumerosPares from "../exercicios/NumerosPares";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/numeros712", element: <Numeros712 />},
    {path: "/exercicios", element: <Exercicios />},
    {path: "/numerosPares", element: <NumerosPares />},
])

export default router;

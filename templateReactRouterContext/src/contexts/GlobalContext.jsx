import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
const [diaDeHoje, setDiadeHoje] = useState('Quinta')


    return(
        <GlobalContext.Provider value={{usuarioLogado, diaDeHoje, setDiadeHoje}}>
            {children}
        </GlobalContext.Provider>
    )
}

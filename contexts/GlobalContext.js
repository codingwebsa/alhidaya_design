import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext({})

export const GlobalContextProvider= ({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    return (
        <GlobalContext.Provider value={{isCartOpen, setIsCartOpen}}>
            {children}
        </GlobalContext.Provider>
    )
}
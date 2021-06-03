import React from "react"
import { useState } from "react"

const Context = React.createContext({})

export function TrabajoContext({children}){
    const [trabajo, settrabajo] = useState("")
    return <Context.Provider value={{trabajo, settrabajo}}>
        {children}
    </Context.Provider>
}

export default Context
import React from "react"
import Principal from "./Page/Principal"
import {DataContext} from "./Context/Context"
import {TrabajoContext} from "./Context/TrabajoContext"

const App = () => {
  return (
    <TrabajoContext>
      <DataContext>
        <Principal />
      </DataContext>  
    </TrabajoContext>
  )
}

export default App
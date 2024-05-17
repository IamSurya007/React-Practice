// import React from 'react'

// import Two from "./Two"
import { useContext } from "react"
import { CountContext } from "../App"

const Four = () => {
  const countContext= useContext(CountContext)
  return (
    <div>
      Component2 : {countContext.countState}
      <div>
        <button onClick={()=> countContext.countDispatch('increament')} className=" px-4 bg-blue-400 rounded-md mr-4">Increament</button>
        <button onClick={()=> countContext.countDispatch('decreament')} className=" px-4 bg-blue-400 rounded-md mr-4">Decreament</button>
        <button onClick={()=> countContext.countDispatch('reset')} className=" px-4 bg-blue-400 rounded-md mr-4">Reset</button>
        </div>
    </div>
  )
}

export default Four
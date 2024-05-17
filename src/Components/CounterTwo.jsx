// import React from 'react'

import { useReducer } from "react"

const initialState= {
    firstCounter:0,
    secondCounter:10
}
const reducer=(state, action)=>{
    switch(action.type){
        case 'increament':
            return {...state, firstCounter: state.firstCounter+action.value}
        case 'increament2':
            return {...state, secondCounter: state.secondCounter+action.value}
        case 'decreament':
            return {...state, firstCounter: state.firstCounter-action.value}
        case 'decreament2':
            return {...state, secondCounter: state.secondCounter-action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}
const CounterTwo = () => {
    const [count, dispatch]= useReducer(reducer,initialState)
  return (
    <div className=" flex flex-col items-center space-y-2">
        <div>FirstCount: {count.firstCounter}</div>
        <div>SecondCount: {count.secondCounter}</div>
        <div>
            <button onClick={()=> dispatch({type:'increament' ,value :1})} className=" px-4 rounded-md bg-yellow-400 mr-4">Increament</button>
            <button onClick={()=> dispatch({type:'decreament', value:1})} className=" px-4 rounded-md bg-yellow-400 mr-4">Decreament</button>
            <button onClick={()=> dispatch({type:'increament' ,value :5})} className=" px-4 rounded-md bg-yellow-400 mr-4">Increament5</button>
            <button onClick={()=> dispatch({type:'decreament', value:5})} className=" px-4 rounded-md bg-yellow-400 mr-4">Decreament5</button>
            <button onClick={()=> dispatch({type:'increament2', value:2})} className=" px-4 rounded-md bg-yellow-400 mr-4">increament2</button>
            <button onClick={()=> dispatch({type:'decreament2', value:2})} className=" px-4 rounded-md bg-yellow-400 mr-4">decreament2</button>       
            <button onClick={()=> dispatch({type:'reset'})} className=" px-4 rounded-md bg-yellow-400 mr-4">reset</button>  
        </div>
    </div>
  )
}

export default CounterTwo
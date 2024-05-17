import axios from "axios"
import {  useEffect, useReducer } from "react"

const initialState={
  loading: true,
  post:{},
  error:''
}

const reducer=(state, action)=>{
  switch(action.type){
    case 'FETCH_SUCCESS':
      return{
        loading:false,
        post:action.payload,
        error: ''
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'something went wrong'
      }
      default:
        return state
  }
}

const DataFetchOne = () => {
    const [state, dispatch]= useReducer(reducer,initialState)

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response=>{
        dispatch({type:'FETCH_SUCCESS', payload:response.data})
      })
      .catch(err=>{
        dispatch({type: 'FETCH_ERROR'})
        console.log(err)
      })
    },[])
  return (
    <div>
        {state.loading ? 'Loading': state.post.title}
        {state.error ? 'Something went wrong': null}
    </div>
  )
}

export default DataFetchOne
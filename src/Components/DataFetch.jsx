import axios from "axios"
import { useEffect, useState } from "react"
const DataFetch = () => {

    const [loading, setLoading]= useState(true)
    const [err, setErr]= useState('')
    const [post, setPost]= useState({})
    const [id, setId]= useState(1)
    const [idFromButtonClick, setIdFromButtonClick]= useState(1)

    const handleClick =()=>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(response =>{
        setLoading(false)
        setPost(response.data)
        setErr('')
      })
      .catch(err=>{
        setLoading(false)
        setPost({})
        setErr("something is wrong")
        console.log(err)
      })
    })
  return (
    <div className=' flex flex-col items-center space-x-3'>
        <input type='text' value={id} placeholder='enter id' onChange={e=> setId(e.target.value)} className=' shadow-md mx-4'/>
        <button onClick={handleClick} className=' shadow-lg bg-blue-500 px-4 rounded-md py-2 my-5'>Fetch Post</button>
        <div>
        {loading ? 'Loading': post.title}
        {err? err : null}
        </div>
    </div>
  )
}

export default DataFetch
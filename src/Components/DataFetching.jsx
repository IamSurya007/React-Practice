import { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = () => {

    const [post, setPost] = useState({})
    const [id, setId]= useState(1);
    const [idFromButtonClick, setIdFromButtonClick]= useState(1)

    const handleClick =()=>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }, [idFromButtonClick])
  return (
    <div className=' flex flex-col items-center space-x-3'>
        <input type='text' value={id} placeholder='enter id' onChange={e=> setId(e.target.value)} className=' shadow-md mx-4'/>
        <button onClick={handleClick} className=' shadow-lg bg-blue-500 px-4 rounded-md py-2 my-5'>Fetch Post</button>
        <div>
        {post.title}
        </div>
    </div>
  )
}

export default DataFetching
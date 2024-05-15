 import React from 'react'
 import { Link } from 'react-router-dom'
 import { useEffect, useState } from 'react'
 import api from '../config/config'
 const Receitas = () => {
   
    const [post , setPost ] = useState([])
    const getreceitas = async() => {
        
        try {
            const resposta = await api.get('/posts');
            const data = resposta.data 
            setPost(data)
            console.log(data)
        } 
        
        catch (error) {
            console.log(error)
            
        }
  
    }
  //https://pokeapi.co/api/v2/pokemon
    useEffect(() => {
        getreceitas()
    }, [])

    return (
        <div> 
            <h1 className='mg-auto'>Post</h1>
            {post.length === 0? (<p>Carregando</p>) : (
                post.map((posts) =>
                <div className='post'>
                    <h1>{posts.title}</h1>
                    <p>{posts.body}</p>
                    <Link to={`/post/${posts.id}`} className='btn'>Detalhes</Link>  
                </div>
                )
            )}
        </div>
    )
}

export default Receitas
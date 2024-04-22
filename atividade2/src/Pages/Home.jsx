import React from 'react'
import {useNavigate} from 'react-router-dom'
import { filmes } from '../Components/filmes'

export default function Home() {

  const navigate = useNavigate()
  return (
    <div>
      <header className='centro'>
        <h1>Filmes em Catalogo</h1>   
      </header>
      <div className='container-opcoes'>
        <div className='opcoes'>
          {filmes.map((filme) => (
            <div className='cartaz'>
              <img src={filme.img} alt="" onClick={() => navigate(`/about`, {state: filme})} className='animation'/>
              <p>{filme.nome}</p> 
              <p>{filme.nota}</p>
              <p>{filme.ano}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

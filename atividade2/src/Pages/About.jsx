import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../Components' 

export default function About() {

  const {state} = useLocation()
  const navigate = useNavigate()

  return (
    <div id='ceno'>
      <div className='container-filme'>
        
      <img  src={state.img} alt={state.id} style={{
         width: "242px", 
         height: "340px",  
        }}
      />
      
        <div className='informacoes'>
            <h1>{state.nome}</h1>
            <h4>{state.ano}</h4>
            <h4>Diretor: {state.diretor}</h4>
            <h5><strong>Avaliação dos Usuários:  {state.avaliacaousuario}</strong></h5>
            <p> <h3>Sinopse do Filme:</h3>{state.sinopse}</p>
            <Button Button texto={'Retornar'} onClick={() => navigate('/')}></Button>

        </div>

      </div>
    </div>
  )
}

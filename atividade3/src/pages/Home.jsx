import React from 'react'
import {Button} from '../components'
import { useNavigate } from 'react-router-dom'
export  default function Home() {
  const navigate = useNavigate() 
  return (
    <div className='body'>
      <div className='caixote'>
          <h1>Bem vindo</h1>
          <p>Esta e a pagina inicial</p>  
          <Button onClick={() => navigate('/about')} text="Clique aqui"/>
      </div>
    </div>
  )
}

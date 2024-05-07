import React from 'react'
import { Cadastro, Titulo } from '../components'
import { Link } from 'react-router-dom'
export default function Cadastrar() {
  return (
    <div className='center'>
      <Titulo titulo={"Cadastro"}/>
      <Link to={"/"}><button>Voltar</button></Link>
      <Cadastro/>
    </div>
  )
}

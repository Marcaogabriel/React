import React from 'react'
import { Link } from 'react-router-dom'
import { Titulo} from '../components/index'

export default function Home() {
  return (
    <div>  
      <Titulo titulo="Home"/>
      <Link to={"/cadas"}>Cadastro</Link>
      <Link to={"/objeto"}>Objeto</Link>
    </div>
  )
}

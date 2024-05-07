import React from 'react'
import { Link } from 'react-router-dom'
import { Titulo} from '../components/index'
export default function Home() {
  return (
    <div className='espaco'>  
        <div  className='center11'>
          <Titulo titulo="Cadastre-se"/>
          <Link to={"/cadas"}>Cadastro</Link>
        </div>
    </div>  
  )
}

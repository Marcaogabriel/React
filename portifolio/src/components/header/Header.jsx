import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'
export default function Header() {
  return (
    <div>
      <header className='header'>
            <h1>Marcos Gabriel <sub>Desenvolvedor</sub></h1>
            <nav>
                <ul>
                    <li><Link to='/' >Home</Link></li> 
                    <li><Link to='/projetos'>Projetos</Link></li>  
                    <li><Link to='/contatos'>Contatos</Link></li> 
                </ul>
            </nav>
        </header>
    </div>
  )
}

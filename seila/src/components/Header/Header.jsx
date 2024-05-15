import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
    <div>
      <header className='header'>
        <h1>Oi</h1>
        <nav className='nav'>
          <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/about' >About</Link></li>
            <li><Link to='/contact' >Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

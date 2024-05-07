import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button/Button'
import { AdivinheACarta } from '../components'
export default function About() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>About</h1>
        <div className='sim'>
          <AdivinheACarta/>

          <Button onClick={() => navigate('/')} text="Clique aqui"/>
        </div>
    </div>
  )
}

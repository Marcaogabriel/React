import React from 'react'
import devimg from '../../assets/img/dev.jpeg'
import './inicio.css'
export default function Inicio() {
  return (
    <div className='inicio'>
        <section id='home'>
            <p> <h1>Bem vindo ao meu site</h1> <p>Developer</p> Meu nome é Marcos Gabriel e embora eu não tenha experiência em programação, estou comprometido em entrar no mundo da tecnologia com determinação e curiosidade.Estou pronto para aprender, crescer e contribuir de maneira significativa para este campo emocionante. 
            </p>
            <div>
            <img src={devimg} className='devimg' alt="" />
            </div>
        </section> 
    </div>
  )
}

import React from 'react'
import devimg from '../assets/img/dev.jpeg'
export default function Section1() {
  return (
<div>
    <div className='caixa'>
        <section id='home'>
            <p> <h1>Bem vindo ao meu site</h1> <p>Developer</p> Meu nome é Marcos Gabriel e embora eu não tenha experiência em programação, estou comprometido em mergulhar no mundo da tecnologia com determinação e curiosidade. Estou pronto para aprender, crescer e contribuir de maneira significativa para este campo emocionante .</p>
        </section>
        <div className='right'>
                <img src={devimg} className='devimg' alt="" />
        </div>
    </div>
</div>
  )
}

import React from 'react'
import './simples.css'

export default function Caixas({titulo, link}) {
  return (
    <div>
        <section id='projetos'>
            <article>
                <h4>{titulo}</h4>
                <p><a target="_blank" rel="noopener noreferrer" href={link}>{link}</a></p>
            </article>
            
        </section>
    </div>
  )
}

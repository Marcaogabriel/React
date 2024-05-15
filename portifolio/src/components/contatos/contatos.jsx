import React from 'react'
import './contatos.css'
export default function Contatos1({titulo, foto, link, texto}) {
  return (
    <div>
        <section id='contatos'>
            <article>
                <div>
                {foto}
                <h4>{titulo}:</h4>
                <p><a href={link} target="_blank" rel="noopener noreferrer">{texto}</a></p>
                </div>
            </article>
            
        </section>
    </div>
  )
}

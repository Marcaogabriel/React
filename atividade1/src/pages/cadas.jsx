import React from 'react'
import { Cadastro, Titulo } from '../components'
import { Link } from 'react-router-dom'
export default function Cadastrar() {
  return (
    <div className='center'>
      <Titulo titulo={"Cadastro"}/>
      <Link to={"/"}>
        <img 
        style={{
          width: "50px",
          height: "50px",
        }}
      src='https://previews.123rf.com/images/dstarky/dstarky1708/dstarky170800279/83684844-%C3%ADcone-de-casa-premium-ou-logotipo-em-linha-sinal-e-s%C3%ADmbolo-de-alta-qualidade-em-um-fundo-branco.jpg'/></Link>
      <Cadastro/>
    </div>
  )
}

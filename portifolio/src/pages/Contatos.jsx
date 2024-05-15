import React from 'react'
import {Header, Contatos1} from '../components'
import { FaGithub, FaEnvelope, FaInstagram} from 'react-icons/fa'
export default function Contatos() {
  return (
    <div>
      <Header/>
      
      <Contatos1 foto= {<FaGithub/>} titulo={'Github'} link={'https://github.com/Marcaogabriel'} texto={'https://github.com/Marcaogabriel'}/>
      <Contatos1 foto={<FaEnvelope/>} titulo={'Email'} link={'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZdkbmLPthrFPpbJjGJhRzcJJfzvCgNNtFVhGvrwptHhfMTRxsxJbgRckbqcqldgSVpqsq'} texto={'mgabrielpazdeoliveira@gmail'}/>
      <Contatos1 foto={<FaInstagram/>} titulo={'Instagram'} link={'https://www.instagram.com/marco_spaz8'} texto={'https://www.instagram.com/marco_spaz8'}/>
    </div>
  )
}


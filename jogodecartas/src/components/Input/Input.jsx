import React from 'react'

export default function Input({tipo, escrito, onChange, id, nome, classe}) {
  return (
    <input type={tipo} placeholder={escrito} onChange={onChange} id={id} className={classe} name={nome}  />
  )
}

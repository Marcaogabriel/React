import React from 'react'
import './button.css'
export default function Button({onClick, text, tipo}) {
  return( <button type={tipo} onClick={onClick}>{text}</button>)
}

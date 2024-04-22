import React from 'react';
import "./button.css";
export default function Button({onClick, texto}) {
  return (
    <button onClick={() => onClick()}>{texto}</button>
    
  )
}

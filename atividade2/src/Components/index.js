import React from 'react'; 
import "./button.css";
export function Button({texto, onClick}){
    return (
        <button className='botao' onClick={onClick}>{texto}</button>
    )
}
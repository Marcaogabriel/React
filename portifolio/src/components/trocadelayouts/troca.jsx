import React, { useState } from "react";
import  { Carrossel } from "../index";
import Caixas from "./simples/simples";
function  Simples(){
  return (
    <div>
      {
      <div>
          <Caixas titulo={'Cadastro'} link={'https://github.com/Marcaogabriel/React/tree/main/cadastro'}/>
          <Caixas titulo={'Catalogo de Filmes'} link={'https://github.com/Marcaogabriel/React/tree/main/catalogodefilmes'}/>
          <Caixas titulo={'Farmacia'} link={'https://github.com/Marcaogabriel/React/tree/main/farmacia'}/>
          <Caixas titulo={'Jogo de adivinhação de cartas com API'} link={'https://github.com/Marcaogabriel/React/tree/main/jogodecartas'}/>
      </div>
      }
    </div>
  );
};

function Carrossel1(){
  return (
    <div>
      {<Carrossel/>}
    </div>
  );
};


function TrocadeLayout() {
  const [showSimples, setShowSimples] = useState(false);
  const [showCarrossel1, setShowCarrossel1] = useState(false);

  
  function clicounoSimples() {
    setShowSimples(true);
    setShowCarrossel1(false);
  };  

  
  function clicounoCarrossel() {
    setShowSimples(false);
    setShowCarrossel1(true);
  };

  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
      }}>

      <h2 style={{fontSize: '20px', color: 'white', paddingLeft: '25px'}}>Layouts: </h2>

      <button style={{width: '60px', height: '20px',fontSize: '13px',backgroundColor: 'white', cursor: 'pointer', borderRadius: '5px' }} onClick={clicounoSimples}>Simples</button>

      <button style={{width: '70px', height: '20px',fontSize: '13px',backgroundColor: 'white', cursor: 'pointer', borderRadius: '5px'}} onClick={clicounoCarrossel}>Carrossel</button>

      </div>
      {showSimples && <Simples />}
      {showCarrossel1 && <Carrossel1 />}
    </div>
  );
};

export default TrocadeLayout;

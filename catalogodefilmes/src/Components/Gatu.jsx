import React from 'react';

function Gatu() {
  const recarregarPagina = () => {
    window.location.reload(); // Recarrega a página quando o botão é clicado
  };

  return (
    <button onClick={recarregarPagina} className='meio'>Mudar Foto</button>
  );
}

export default Gatu;

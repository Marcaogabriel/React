import {useNavigate} from 'react-router-dom' 
import { filmes } from '../Components/filmes'

export default function Home() {
  const navigate = useNavigate() 

  return (
    <div>
      <header className='centro'>
        <h1>Filmes em Catalogo</h1>    
      </header>
      <div className='container-opcoes'>
        <div className='opcoes'>
          {filmes.map((filme) => (
            <div className='cartaz'> {/*Outro metodo use class "opcoes"*/}
              <img src={filme.img} alt="" onClick={() => navigate(`/about`, {state: filme})} className='animation'/>
              <p>{/*<h2>Nome:</h2>*/}{filme.nome}</p> 
              <p>{/*<h2>Nota:</h2>*/}{filme.nota}</p>
              {/*<p><h2>Avaliação:</h2>  {filme.avaliacaousuario}</p>*/}
              <p>{/*<h2>Lançamento: </h2>*/}{filme.ano}</p> 
            </div>
          ))}
            <button className='botao' onClick={() => navigate('/gato')}>Gato</button>
        
        </div>
      </div>

    </div>
  )
}

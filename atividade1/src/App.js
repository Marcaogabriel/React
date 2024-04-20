import './App.css';
import { Cadastro, Titulo, Estudar, Foto, H} from './components';

function App() {
  return (
    <div className="App">
      <Titulo titulo = "Cadastro"/>
      <Estudar url="https://react.dev/learn" title="Estudar React " ></Estudar>
      <Foto urlf="https://www.codigofonte.com.br/wp-content/uploads/2014/05/google-new-logo.jpg"/>
      <Cadastro/>
      <H title="Sem Criatividade"/>
    </div>
  );
}

export default App;

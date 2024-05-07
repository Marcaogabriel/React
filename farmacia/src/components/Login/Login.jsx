import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate()

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para verificar o nome de usuário e senha
    // e autenticar o usuário. Por enquanto, vamos apenas simular uma autenticação básica.
    if (username === 'usuario' && password === 'senha') {
      setLoggedInUser(username);
    } else {
      alert('Nome de usuário ou senha incorretos');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setUsername('');
    setPassword('');
    alert('Sessão encerrada');
  };

  return (
    <div className="body">
        <div className="cadas">
        {loggedInUser ? (
            <div>
            <h2>Bem-vindo, {loggedInUser}!</h2>
            <button onClick={handleLogout}>Sair</button>
            <button onClick={() => navigate(-1)}>Voltar</button>
            </div>
        ) : (
            <div>
            <h2>Entre na sua conta</h2>
            <input
                type="text"
                placeholder="Nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Entrar</button>
            </div>
        )}
        </div>
    </div>
  );
};

export default Login;

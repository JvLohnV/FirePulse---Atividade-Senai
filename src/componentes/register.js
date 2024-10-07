import React, { useState } from 'react';
import axios from '../utils/axios';
import { useHistory } from 'react-router-dom';
import './registerStyle.css'; // Crie este arquivo para estilizar

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const res = await axios.post('/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      // Redirecionar para a página principal
      history.push('/');
    } catch (err) {
      console.error(err.response.data.message);
      setError(err.response.data.message || 'Erro ao registrar o usuário.');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        {error && <p className="error-message">{error}</p>}
        <input 
          type="text" 
          placeholder="Nome" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Confirmar Senha" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required 
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
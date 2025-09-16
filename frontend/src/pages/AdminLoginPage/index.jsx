//Página de Login do Administrador 

import React, { useState } from 'react';
import './AdminLoginPage.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // A função login agora vem do contexto e já faz a chamada à API
      const loggedInUser = await login(email, password);

      // A lógica de redirecionamento permanece, mas agora confia no estado do contexto
      if (loggedInUser && loggedInUser.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        // O erro de "não é admin" ou credenciais inválidas será lançado pelo contexto
        setError('Acesso negado. Verifique suas credenciais ou permissões.');
      }
    } catch (error) {
      // O erro lançado pelo contexto (ex: "Falha no login") será capturado aqui
      setError(error.message);
    }
  };

  return (
    <div className="loginContainer">
        <div className="loginBox">
            <h1 className="title">Login do Administrador</h1>
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <p className="errorMessage">{error}</p>}
                <button type="submit" className="loginButton">Entrar</button>
            </form>
            <div className="backLinkContainer">
                <Link to="/" className="backLink">&larr; Voltar ao site</Link>
            </div>
        </div>
    </div>
  );
};

export default AdminLoginPage;
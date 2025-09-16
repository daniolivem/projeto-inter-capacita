import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";
import styles from './LoginPage.module.css';

const validateLoginForm = (formData) => {
  const errors = {};
  if (!formData.email) {
    errors.email = 'O email é obrigatório';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'O formato do email é inválido';
  }
  if (!formData.password) {
    errors.password = 'A senha é obrigatória';
  }
  return errors;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateLoginForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({}); // Limpa erros antigos

      try {
        // Utiliza a função de login centralizada do AuthContext
        const user = await login(formData.email, formData.password);

        console.log('Login bem-sucedido:', user);

        // Navega para o painel correto com base na role do usuário
        switch (user.role) {
          case 'cliente':
            navigate('/cliente/dashboard');
            break;
          case 'vendedor':
            navigate('/vendedor/dashboard');
            break;
          default:
            setErrors({ general: 'Tipo de usuário não reconhecido.' });
            break;
        }

      } catch (error) {
        // O erro lançado pelo contexto é capturado e exibido aqui
        setErrors({ general: error.message });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className={styles.pageContainer}>
        <div className={styles.formWrapper}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Acesse sua Conta</h1>
                <p className={styles.subtitle}>
                    Não tem uma conta? <Link to="/create-account" className={styles.link}>Crie uma aqui</Link>
                </p>
            </div>
            <form onSubmit={handleSubmit} noValidate>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={errors.email ? styles.inputError : ''} placeholder="seu.email@exemplo.com" />
                    {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Senha *</label>
                    <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} className={errors.password ? styles.inputError : ''} placeholder="Sua senha" />
                    {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
                </div>
                {errors.general && <p className={styles.errorMessage}>{errors.general}</p>}
                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    {isSubmitting ? 'Entrando...' : 'Entrar'}
                </button>
            </form>
            <div className={styles.separator}><span>Ou entre com</span></div>
            <div className={styles.socialLogin}>
                <button className={styles.socialButton}>Google</button>
                <button className={styles.socialButton}>Facebook</button>
            </div>
        </div>
    </div>
  );
};

export default LoginPage;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './FormCreatePage.module.css'; // Usando CSS Modules para evitar conflitos de estilo

// Componente da página de criação de conta
const FormCreatePage = () => {
    // Hook para navegação programática após o sucesso do cadastro
    const navigate = useNavigate();

    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Estado para armazenar mensagens de erro de validação
    const [errors, setErrors] = useState({});
    // Estado para controlar se o formulário está sendo enviado
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Função para atualizar o estado do formulário conforme o usuário digita
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    // Função para validar todos os campos do formulário
    const validate = () => {
        const newErrors = {};

        // Validações dos campos
        if (!formData.firstName) newErrors.firstName = 'O nome é obrigatório';
        if (!formData.lastName) newErrors.lastName = 'O sobrenome é obrigatório';
        if (!formData.email) {
            newErrors.email = 'O email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'O formato do email é inválido';
        }
        if (!formData.password) {
            newErrors.password = 'A senha é obrigatória';
        } else if (formData.password.length < 8) {
            newErrors.password = 'A senha deve ter no mínimo 8 caracteres';
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'A confirmação da senha é obrigatória';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'As senhas não coincidem';
        }

        return newErrors;
    };

    // Função chamada ao enviar o formulário
    const handleSubmit = e => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);

        // Se não houver erros, simula o envio do formulário
        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            console.log('Formulário enviado com sucesso:', formData);

            // Simula uma chamada à API e redireciona o usuário
            setTimeout(() => {
                setIsSubmitting(false);
                // Redireciona para a página de login ou para a página da conta
                navigate('/login');
            }, 2000);
        }
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.formWrapper}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Crie sua Conta</h1>
                    <p className={styles.subtitle}>
                        Já possui uma conta? <Link to="/login" className={styles.link}>Faça login aqui</Link>
                    </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                    <div className={styles.formRow}>
                        {/* Campo Nome */}
                        <div className={styles.formGroup}>
                            <label htmlFor="firstName">Nome *</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={errors.firstName ? styles.inputError : ''}
                                placeholder="Seu nome"
                            />
                            {errors.firstName && <p className={styles.errorMessage}>{errors.firstName}</p>}
                        </div>
                        {/* Campo Sobrenome */}
                        <div className={styles.formGroup}>
                            <label htmlFor="lastName">Sobrenome *</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={errors.lastName ? styles.inputError : ''}
                                placeholder="Seu sobrenome"
                            />
                            {errors.lastName && <p className={styles.errorMessage}>{errors.lastName}</p>}
                        </div>
                    </div>

                    {/* Campo Email */}
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email *</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? styles.inputError : ''}
                            placeholder="exemplo@email.com"
                        />
                        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
                    </div>

                    {/* Campo Senha */}
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Senha *</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? styles.inputError : ''}
                            placeholder="Mínimo de 8 caracteres"
                        />
                        {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
                    </div>

                    {/* Campo Confirmar Senha */}
                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword">Confirmar Senha *</label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={errors.confirmPassword ? styles.inputError : ''}
                            placeholder="Repita sua senha"
                        />
                        {errors.confirmPassword && <p className={styles.errorMessage}>{errors.confirmPassword}</p>}
                    </div>

                    {/* Botão de envio */}
                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Criando conta...' : 'Criar Conta'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormCreatePage;

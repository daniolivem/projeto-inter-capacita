import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './FormCreatePage.module.css';

// --- LÓGICA DE VALIDAÇÃO INTEGRADA ---

// Constantes com as regras de validação
const VALIDATION_RULES = {
    EMAIL_REGEX: /\S+@\S+\.\S+/,
    PASSWORD_MIN_LENGTH: 8,
};

// Mensagens de erro padronizadas
const ERROR_MESSAGES = {
    REQUIRED: (fieldName) => `O campo ${fieldName} é obrigatório`,
    INVALID_EMAIL: 'O formato do email é inválido',
    PASSWORD_TOO_SHORT: (minLength) => `A senha deve ter no mínimo ${minLength} caracteres`,
    PASSWORDS_DO_NOT_MATCH: 'As senhas não coincidem',
};

/**
 * Valida os dados do formulário de registo.
 * @param {object} formData - O estado atual do formulário.
 * @returns {object} Um objeto contendo os erros de validação.
 */
const validateForm = (formData) => {
    const errors = {};
    const { firstName, lastName, email, password, confirmPassword } = formData;

    // Validação de nome e sobrenome
    if (!firstName) errors.firstName = ERROR_MESSAGES.REQUIRED('nome');
    if (!lastName) errors.lastName = ERROR_MESSAGES.REQUIRED('sobrenome');

    // Validação de email
    if (!email) {
        errors.email = ERROR_MESSAGES.REQUIRED('email');
    } else if (!VALIDATION_RULES.EMAIL_REGEX.test(email)) {
        errors.email = ERROR_MESSAGES.INVALID_EMAIL;
    }

    // Validação de senha
    if (!password) {
        errors.password = ERROR_MESSAGES.REQUIRED('senha');
    } else if (password.length < VALIDATION_RULES.PASSWORD_MIN_LENGTH) {
        errors.password = ERROR_MESSAGES.PASSWORD_TOO_SHORT(VALIDATION_RULES.PASSWORD_MIN_LENGTH);
    }

    // Validação da confirmação de senha
    if (!confirmPassword) {
        errors.confirmPassword = ERROR_MESSAGES.REQUIRED('confirmação da senha');
    } else if (password !== confirmPassword) {
        errors.confirmPassword = ERROR_MESSAGES.PASSWORDS_DO_NOT_MATCH;
    }

    return errors;
};


// --- COMPONENTE FormCreatePage ---

const FormCreatePage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        // A validação agora chama a função que está neste mesmo ficheiro
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            console.log('Formulário enviado com sucesso:', formData);

            setTimeout(() => {
                setIsSubmitting(false);
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

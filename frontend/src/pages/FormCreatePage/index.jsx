import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './FormCreatePage.module.css';

// --- FUNÇÕES DE MÁSCARA ---
const maskCPF = (value) => {
  return value
    .replace(/\D/g, '') // Remove tudo o que não é dígito
    .replace(/(\d{3})(\d)/, '$1.$2') // Coloca um ponto entre o terceiro e o quarto dígitos
    .replace(/(\d{3})(\d)/, '$1.$2') // Coloca um ponto entre o sexto e o sétimo dígitos
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o nono e o décimo dígitos
};

const maskCNPJ = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
};

const maskCelular = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
};


// --- LÓGICA DE VALIDAÇÃO ---
const VALIDATION_RULES = {
  EMAIL_REGEX: /\S+@\S+\.\S+/,
  PASSWORD_MIN_LENGTH: 8,
};

const ERROR_MESSAGES = {
  REQUIRED: (fieldName) => `O campo ${fieldName} é obrigatório`,
  INVALID_EMAIL: 'O formato do email é inválido',
  PASSWORD_TOO_SHORT: (minLength) =>
    `A senha deve ter no mínimo ${minLength} caracteres`,
  PASSWORDS_DO_NOT_MATCH: 'As senhas não coincidem',
};

// Função de validação
const validateForm = (formData, userType) => {
  const errors = {};
  const {
    firstName,
    lastName,
    cpf,
    cnpj,
    celular,
    endereco,
    email,
    password,
    confirmPassword,
  } = formData;

  if (!firstName) errors.firstName = ERROR_MESSAGES.REQUIRED('nome');
  if (!lastName) errors.lastName = ERROR_MESSAGES.REQUIRED('sobrenome');

  if (userType === 'cliente') {
    if (!cpf) errors.cpf = ERROR_MESSAGES.REQUIRED('CPF');
  } else if (userType === 'vendedor') {
    if (!cnpj) errors.cnpj = ERROR_MESSAGES.REQUIRED('CNPJ');
  }

  if (!celular) errors.celular = ERROR_MESSAGES.REQUIRED('celular');
  if (!endereco) errors.endereco = ERROR_MESSAGES.REQUIRED('endereço');

  if (!email) {
    errors.email = ERROR_MESSAGES.REQUIRED('email');
  } else if (!VALIDATION_RULES.EMAIL_REGEX.test(email)) {
    errors.email = ERROR_MESSAGES.INVALID_EMAIL;
  }

  if (!password) {
    errors.password = ERROR_MESSAGES.REQUIRED('senha');
  } else if (password.length < VALIDATION_RULES.PASSWORD_MIN_LENGTH) {
    errors.password = ERROR_MESSAGES.PASSWORD_TOO_SHORT(
      VALIDATION_RULES.PASSWORD_MIN_LENGTH
    );
  }

  if (!confirmPassword) {
    errors.confirmPassword = ERROR_MESSAGES.REQUIRED('confirmação da senha');
  } else if (password !== confirmPassword) {
    errors.confirmPassword = ERROR_MESSAGES.PASSWORDS_DO_NOT_MATCH;
  }

  return errors;
};

// --- FORMULÁRIO DE CADASTRO ---
const RegistrationForm = ({ userType }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cpf: '',
    cnpj: '',
    celular: '',
    endereco: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // LÓGICA DE handleChange ATUALIZADA PARA USAR AS MÁSCARAS
  const handleChange = (e) => {
    const { name, value } = e.target;
    let maskedValue = value;

    if (name === 'cpf') {
        maskedValue = maskCPF(value);
    } else if (name === 'cnpj') {
        maskedValue = maskCNPJ(value);
    } else if (name === 'celular') {
        maskedValue = maskCelular(value);
    }

    setFormData((prevData) => ({ ...prevData, [name]: maskedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData, userType);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Preparar os dados para enviar ao backend
        const userData = {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
          role: userType,
          phone: formData.celular,
          address: formData.endereco,
          ...(userType === 'vendedor' && { cnpj: formData.cnpj })
        };

        // Fazer a requisição para a API
        const response = await fetch('http://localhost:3001/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Erro ao cadastrar usuário');
        }

        // Se o cadastro for bem-sucedido
        if (userType === 'vendedor') {
          navigate('/cadastro/pendente');
        } else {
          navigate('/login');
        }
      } catch (error) {
        setErrors({ general: error.message });
      } finally {
        setIsSubmitting(false);
      }
    }
  };  return (
    <div className={styles.formWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Crie sua Conta de {userType === 'cliente' ? 'Cliente' : 'Vendedor'}
        </h1>
        <p className={styles.subtitle}>
          Já possui uma conta?{' '}
          <Link to="/login" className={styles.link}>
            Faça login aqui
          </Link>
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
            {errors.firstName && (
              <p className={styles.errorMessage}>{errors.firstName}</p>
            )}
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
            {errors.lastName && (
              <p className={styles.errorMessage}>{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* CPF ou CNPJ */}
        {userType === 'cliente' ? (
          <div className={styles.formGroup}>
            <label htmlFor="cpf">CPF *</label>
            <input
              id="cpf"
              name="cpf"
              type="text"
              value={formData.cpf}
              onChange={handleChange}
              maxLength="14"
              className={errors.cpf ? styles.inputError : ''}
              placeholder="000.000.000-00"
            />
            {errors.cpf && (
              <p className={styles.errorMessage}>{errors.cpf}</p>
            )}
          </div>
        ) : (
          <div className={styles.formGroup}>
            <label htmlFor="cnpj">CNPJ *</label>
            <input
              id="cnpj"
              name="cnpj"
              type="text"
              value={formData.cnpj}
              onChange={handleChange}
              maxLength="18"
              className={errors.cnpj ? styles.inputError : ''}
              placeholder="00.000.000/0000-00"
            />
            {errors.cnpj && (
              <p className={styles.errorMessage}>{errors.cnpj}</p>
            )}
          </div>
        )}

        {/* Campos comuns */}
        <div className={styles.formGroup}>
          <label htmlFor="celular">Número do Celular *</label>
          <input
            id="celular"
            name="celular"
            type="text"
            value={formData.celular}
            onChange={handleChange}
            maxLength="15"
            className={errors.celular ? styles.inputError : ''}
            placeholder="(00) 90000-0000"
          />
          {errors.celular && (
            <p className={styles.errorMessage}>{errors.celular}</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="endereco">Endereço *</label>
          <input
            id="endereco"
            name="endereco"
            type="text"
            value={formData.endereco}
            onChange={handleChange}
            className={errors.endereco ? styles.inputError : ''}
            placeholder="Rua, Número, Bairro, Cidade - Estado"
          />
          {errors.endereco && (
            <p className={styles.errorMessage}>{errors.endereco}</p>
          )}
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
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email}</p>
          )}
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
          {errors.password && (
            <p className={styles.errorMessage}>{errors.password}</p>
          )}
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
          {errors.confirmPassword && (
            <p className={styles.errorMessage}>{errors.confirmPassword}</p>
          )}
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
  );
};

// --- TELA DE SELEÇÃO DE TIPO ---
const TypeSelection = ({ onSelect }) => (
  <div className={styles.formWrapper}>
    <div className={styles.titleContainer}>
        <h1 className={styles.title}>Crie sua Conta</h1>
        <p className={styles.subtitle}>
            Escolha o tipo de conta que deseja criar:
        </p>
    </div>

    <div className={styles.selectionContainer}>
        <button
            className={styles.selectionButton}
            onClick={() => onSelect('cliente')}
        >
            Quero Comprar
            <span>Conta de Cliente</span>
        </button>
        <button
            className={styles.selectionButton}
            onClick={() => onSelect('vendedor')}
        >
            Quero Vender
            <span>Conta de Vendedor</span>
        </button>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL ---
const FormCreatePage = () => {
  const [userType, setUserType] = useState(null);

  if (!userType) {
    return (
      <div className={styles.pageContainer}>
        <TypeSelection onSelect={setUserType} />
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <RegistrationForm userType={userType} />
    </div>
  );
};

export default FormCreatePage;


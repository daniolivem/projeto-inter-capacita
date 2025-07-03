import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import rizenproc from '../../assets/images/rizenproc.png';
// import pexels2 from '../../assets/images/pexels2.svg';


// Componente principal da página de login
const LoginPage = () => {
    // Estado para armazenar os dados do formulário (email e senha)
    const [formData, setFormData] = useState({ email: ''});
    // Estado para armazenar mensagens de erro de validação
    const [errors, setErrors] = useState({});
    // Estado para controlar se o formulário está sendo enviado
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Função para atualizar o estado do formulário conforme o usuário digita
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(f => ({ ...f, [name]: value }));
    };

    // Função para validar os campos do formulário
    const validate = () => {
        const newErrors = {};
        // Validação do campo email
        if (!formData.email) newErrors.email = 'Email é obrigatório';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
        return newErrors;
    };

    // Função chamada ao enviar o formulário
    const handleSubmit = e => {
        e.preventDefault();
        const newErrors = validate();
        // Se não houver erros, simula envio do formulário
        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            // Simula um delay de envio (ex: chamada à API)
            setTimeout(() => setIsSubmitting(false), 1500);
        } else {
            // Se houver erros, atualiza o estado de erros
            setErrors(newErrors);
        }
    };

    return (
        <><div className='container'>
            <div className='container-form'>
                <div className='container-title'>
                    {/* Título e link para registro */}
                    <h3 className='login-title'>Crie sua conta</h3>
                    <p className='login-subtitle'>
                        Já possui uma conta? Entre <Link to="/login">aqui</Link>
                    </p>
                </div>
                {/* Formulário de login */}
                <form onSubmit={handleSubmit}>
                    <div>
                        {/* Campo de email */}
                        <label htmlFor="email">Email *</label>
                        <input className='input'
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Insira seu login ou email" />
                        {/* Exibe mensagem de erro do email, se houver */}
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                   
                  
                    {/* Botão de envio do formulário, desabilitado enquanto está enviando */}
                    <Link to="/create-account" style={{ textDecoration: 'none' }}>
                        <button
                            className='button'
                            type="button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Redirecionando...' : 'Criar conta'}
                        </button>
                    </Link>
                    </form>
                    <div className='container-social'>
                        <div>
                            <div>
                                <div></div>
                            </div>
                            <div>
                                {/* Texto separador para login social */}
                            <span className='login-separator'>Ou faça login com</span>
                        </div>
                    </div>

                    {/* Ícones de redes sociais para login alternativo */}
                    <div>
                        <ul className='social'>
                            <li className='footer-social-icon'>
                                {/* Ícone do Google */}
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
                                    <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
                                    <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon>
                                    <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path>
                                    <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                                </svg>
                            </li>
                            <li className='footer-social-icon'>
                                {/* Ícone do Facebook */}
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                                    <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container-image1'>
                {/* Imagem de fundo da página de login */}
                <img src={rizenproc} alt="Imagem de fundo" />
            </div>
            <div className='container-image2'>
                {/* Imagem de fundo da página de login */}
                <img src={rizenproc} alt="Imagem de fundo" />
            </div>
            </div>
    </>
    );
};

export default LoginPage;

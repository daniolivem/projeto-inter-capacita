import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './EditarProdutoPage.module.css';

const EditarProdutoPage = () => {
    const { id } = useParams(); // Pega o ID do produto da URL
    const navigate = useNavigate();
    const { user } = useAuth();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);

    // Busca os dados do produto
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const response = await fetch(`http://localhost:3001/api/products/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Produto não encontrado');
                }

                const productData = await response.json();
                
                // Verifica se o produto pertence ao vendedor logado
                if (productData.sellerId !== user?.id) {
                    throw new Error('Você não tem permissão para editar este produto');
                }

                setProduct(productData);
            } catch (err) {
                setError(err.message);
                console.error('Erro ao carregar produto:', err);
            } finally {
                setLoading(false);
            }
        };

        if (id && user?.id) {
            fetchProduct();
        }
    }, [id, user?.id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ 
            ...prev, 
            [name]: name === 'price' || name === 'stock' ? parseFloat(value) || 0 : value 
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`http://localhost:3001/api/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    stock: product.stock
                })
            });

            if (!response.ok) {
                throw new Error('Falha ao atualizar produto');
            }

            alert("Produto atualizado com sucesso!");
            navigate('/vendedor'); // Volta para o painel do vendedor
        } catch (err) {
            console.error('Erro ao salvar produto:', err);
            alert('Erro ao salvar produto: ' + err.message);
        } finally {
            setSaving(false);
        }
    };
    
    // Estados de loading e erro
    if (loading) {
        return <div className={styles.loading}>Carregando produto...</div>;
    }

    if (error) {
        return (
            <div className={styles.pageContainer}>
                <div className={styles.error}>
                    <h2>Erro</h2>
                    <p>{error}</p>
                    <button onClick={() => navigate('/vendedor')} className={styles.backButton}>
                        Voltar ao Painel
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Editar Produto</h1>
                <p className={styles.subtitle}>Altere os detalhes do produto abaixo.</p>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Nome do Produto *</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={product.title || ''}
                            onChange={handleChange}
                            placeholder="Nome do produto"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">Descrição</label>
                        <textarea
                            id="description"
                            name="description"
                            value={product.description || ''}
                            onChange={handleChange}
                            placeholder="Descrição do produto"
                            rows="4"
                        />
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="stock">Estoque *</label>
                            <input
                                id="stock"
                                name="stock"
                                type="number"
                                min="0"
                                value={product.stock || 0}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="price">Preço (R$) *</label>
                            <input
                                id="price"
                                name="price"
                                type="number"
                                step="0.01"
                                min="0"
                                value={product.price || 0}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button 
                            type="button" 
                            className={styles.cancelButton} 
                            onClick={() => navigate('/vendedor')}
                            disabled={saving}
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit" 
                            className={styles.submitButton}
                            disabled={saving}
                        >
                            {saving ? 'Salvando...' : 'Salvar Alterações'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditarProdutoPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './PaginaVendedor.module.css';

const MeusProdutos = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const response = await fetch(`http://localhost:3001/api/products/seller/${user.id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Falha ao carregar produtos');
                }

                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (user?.id) {
            fetchProducts();
        }
    }, [user?.id]);

    const handleAddNewProduct = () => {
        navigate('/vendedor/cadastrar-produto');
    };

    const handleDeleteProduct = async (productId) => {
        if (!window.confirm('Tem certeza que deseja excluir este produto?')) {
            return;
        }

        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`http://localhost:3001/api/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Falha ao excluir produto');
            }

            // Remove o produto da lista local
            setProducts(products.filter(product => product.id !== productId));
            alert('Produto excluído com sucesso!');
        } catch (err) {
            console.error('Erro ao excluir produto:', err);
            alert('Erro ao excluir produto: ' + err.message);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Meus Produtos</h2>
                <button onClick={handleAddNewProduct} className={styles.addProductButton}>
                    + Cadastrar Novo Produto
                </button>
            </div>
            <div className={styles.productsList}>
                <div className={styles.productsHeader}>
                    <span>Produto</span>
                    <span>Estoque</span>
                    <span>Preço</span>
                    <span>Ações</span>
                </div>
                {loading ? (
                    <div className={styles.loading}>Carregando produtos...</div>
                ) : error ? (
                    <div className={styles.error}>{error}</div>
                ) : products.length === 0 ? (
                    <div className={styles.noProducts}>Nenhum produto cadastrado</div>
                ) : (
                    products.map(product => (
                        <div key={product.id} className={styles.productItem}>
                            <span>{product.title}</span>
                            <span>{product.stock}</span>
                            <span>R$ {product.price.toFixed(2)}</span>
                            <div className={styles.actionButtons}>
                                <button 
                                    className={styles.editButton} 
                                    onClick={() => navigate(`/vendedor/produtos/editar/${product.id}`)}
                                >
                                    Editar
                                </button>
                                <button 
                                    className={styles.deleteButton}
                                    onClick={() => handleDeleteProduct(product.id)}
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default MeusProdutos;
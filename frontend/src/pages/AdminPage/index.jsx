import React, { useState, useEffect } from 'react';
import styles from './AdminPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const AdminPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [pendingSellers, setPendingSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPendingSellers = async () => {
      try {
        const token = localStorage.getItem('authToken');
  const response = await fetch('http://localhost:3001/api/admin/pending-sellers', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Falha ao carregar vendedores pendentes');
        }

        const data = await response.json();
        setPendingSellers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingSellers();
  }, []);

  const handleViewDetails = (sellerId) => {
    navigate(`/admin/seller/${sellerId}`);
  };

  if (loading) {
    return <div className={styles.loading}>Carregando...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>Painel do Administrador</h1>
      <h2 className={styles.subtitle}>Vendedores com Cadastro Pendente</h2>

      <div className={styles.pendingList}>
        {pendingSellers.length === 0 ? (
          <div className={styles.emptyState}>
            Não há vendedores pendentes de aprovação.
          </div>
        ) : (
          pendingSellers.map(seller => (
            <div key={seller.id} className={styles.sellerCard}>
              <div className={styles.sellerInfo}>
                <span className={styles.sellerName}>{seller.name}</span>
                <span className={styles.sellerDate}>
                  Data do cadastro: {new Date(seller.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className={styles.sellerActions}>
                <button 
                  className={styles.detailsButton} 
                  onClick={() => handleViewDetails(seller.id)}
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminPage;
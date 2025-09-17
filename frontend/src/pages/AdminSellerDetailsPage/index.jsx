import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './AdminSellerDetailsPage.module.css';

const AdminSellerDetailsPage = () => {
  const { sellerId } = useParams();
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSellerDetails = async () => {
      try {
    const token = localStorage.getItem('authToken');
  const response = await fetch(`http://localhost:3001/api/admin/sellers/${sellerId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Falha ao carregar detalhes do vendedor');
        }

        const data = await response.json();
        setSeller(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSellerDetails();
  }, [sellerId]);

  const handleUpdateStatus = async (status) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`http://localhost:3001/api/admin/sellers/${sellerId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });

      if (!response.ok) {
        throw new Error('Falha ao atualizar status do vendedor');
      }

      // Atualiza o estado local após aprovação/rejeição
      const { seller: updatedSeller } = await response.json();
      setSeller(prevSeller => ({
        ...prevSeller,
        status: updatedSeller.status
      }));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Carregando...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!seller) {
    return <div className={styles.error}>Vendedor não encontrado</div>;
  }

  return (
    <div className={styles.detailsContainer}>
      <Link to="/admin/dashboard" className={styles.backLink}>&larr; Voltar para a lista</Link>
      
      <h1 className={styles.title}>Detalhes do Vendedor</h1>
      
      <div className={styles.detailsCard}>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Nome da Empresa:</span>
          <span className={styles.detailValue}>{seller.name}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>CNPJ:</span>
          <span className={styles.detailValue}>{seller.cnpj}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Email:</span>
          <span className={styles.detailValue}>{seller.email}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Telefone:</span>
          <span className={styles.detailValue}>{seller.phone}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Endereço:</span>
          <span className={styles.detailValue}>{seller.address}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Data de Cadastro:</span>
          <span className={styles.detailValue}>
            {new Date(seller.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Status:</span>
          <span className={`${styles.detailValue} ${styles[seller.status]}`}>
            {seller.status}
          </span>
        </div>

        {seller.status === 'pending' && (
          <div className={styles.actions}>
            <button 
              className={`${styles.actionButton} ${styles.approveButton}`}
              onClick={() => handleUpdateStatus('approved')}
            >
              Aprovar Vendedor
            </button>
            <button 
              className={`${styles.actionButton} ${styles.rejectButton}`}
              onClick={() => handleUpdateStatus('rejected')}
            >
              Rejeitar Vendedor
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSellerDetailsPage;

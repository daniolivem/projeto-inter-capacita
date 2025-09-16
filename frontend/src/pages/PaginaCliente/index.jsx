import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './PaginaCliente.module.css';
import { ListaPedidos } from '../PedidosClientePage';

const PaginaCliente = () => {
  const { user, isAuthenticated, loading } = useAuth(); // 1. Obter o estado de loading

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableData, setEditableData] = useState({});
  const [error, setError] = useState(null);
  const [customerData, setCustomerData] = useState(user);

  useEffect(() => {
    setCustomerData(user);
  }, [user]);

  // 2. Mostrar mensagem de carregamento enquanto o contexto verifica a autenticação
  if (loading) {
    return (
      <div className={styles.paginaCliente}>
        <h1 className={styles.titulo}>Área do Cliente</h1>
        <p>Carregando...</p>
      </div>
    );
  }

  // 3. Após o carregamento, verificar se está autenticado
  if (!isAuthenticated || !customerData) {
    return (
      <div className={styles.paginaCliente}>
        <h1 className={styles.titulo}>Área do Cliente</h1>
        <p>Usuário não autenticado. Por favor, faça login.</p>
      </div>
    );
  }

  const handleEditData = () => {
    if (customerData) {
      setEditableData(customerData);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setEditableData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    setError(null); // Limpa erros anteriores
    try {
      const token = localStorage.getItem('authToken'); // Chave correta do token
      if (!token) {
        setError('Sessão expirada. Por favor, faça login novamente.');
        return;
      }

      // A URL agora aponta para a rota de perfil, sem ID
      const response = await fetch(`http://localhost:3001/api/auth/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(editableData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao salvar alterações.');
      }

      const updatedData = await response.json();
      
      // Atualiza o estado local e o localStorage para refletir a mudança imediatamente
      setCustomerData(updatedData.user);
      localStorage.setItem('user', JSON.stringify(updatedData.user));

      console.log("Dados do cliente salvos no backend:", updatedData);
      setIsModalOpen(false);
    } catch (err) {
      console.error("Erro ao salvar dados do usuário:", err);
      setError(err.message);
    }
  };

  // ... (o restante do seu componente, incluindo a renderização, permanece o mesmo) ...

  if (loading) {
    return <div className={styles.dashboardContainer}><p>Carregando dados do cliente...</p></div>;
  }

  if (error) {
    return <div className={styles.dashboardContainer}><p style={{ color: 'red' }}>Erro: {error}</p></div>;
  }

  if (!customerData) {
    return <div className={styles.dashboardContainer}><p>Nenhum dado de cliente disponível.</p></div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>Painel do Cliente</h1>

      {/* Seção de Dados Pessoais */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Meus Dados</h2>
            <button onClick={handleEditData} className={styles.actionButton}>
                Editar Meus Dados
            </button>
        </div>
        <div className={styles.dataList}>
            <div className={styles.dataField}>
                <strong>Nome:</strong> <span>{customerData.name}</span>
            </div>
            <div className={styles.dataField}>
                <strong>Email:</strong> <span>{customerData.email}</span>
            </div>
            {/* Adicione outros campos que vêm do seu backend, se houver */}
            {customerData.phone && (
              <div className={styles.dataField}>
                  <strong>Telefone:</strong> <span>{customerData.phone}</span>
              </div>
            )}
            {customerData.address && (
              <div className={styles.dataField}>
                  <strong>Endereço:</strong> <span>{customerData.address}</span>
              </div>
            )}
        </div>
      </section>

      {/* Seção de Pedidos Recentes */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Meus Pedidos Recentes</h2>
        <ListaPedidos />
      </section>

      {/* --- MODAL DE EDIÇÃO --- */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Editar Meus Dados</h2>
              <button onClick={handleCloseModal} className={styles.closeButton}>&times;</button>
            </div>
            <form onSubmit={handleSaveChanges} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome Completo</label>
                <input type="text" id="name" name="name" value={editableData.name || ''} onChange={handleModalChange} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={editableData.email || ''} onChange={handleModalChange} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Celular</label>
                <input type="text" id="phone" name="phone" value={editableData.phone || ''} onChange={handleModalChange} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="address">Endereço</label>
                <input type="text" id="address" name="address" value={editableData.address || ''} onChange={handleModalChange} />
              </div>
              <div className={styles.modalActions}>
                <button type="button" onClick={handleCloseModal} className={styles.cancelButton}>Cancelar</button>
                <button type="submit" className={styles.saveButton}>Salvar Alterações</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaginaCliente;
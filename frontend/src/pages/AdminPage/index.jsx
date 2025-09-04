import React from 'react';
import styles from './AdminPage.module.css'; 

// Nossos dados falsos (mock data) para construir o layout
const mockPendingSellers = [
  { id: 1, name: 'João da Silva LTDA', registrationDate: '04/09/2025' },
  { id: 2, name: 'Maria Eletrônicos', registrationDate: '03/09/2025' },
  { id: 3, name: 'Importados do Zé', registrationDate: '02/09/2025' },
];

const AdminPage = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>Painel do Administrador</h1>
      <h2 className={styles.subtitle}>Vendedores com Cadastro Pendente</h2>

      <div className={styles.pendingList}>
        {mockPendingSellers.map(seller => (
          <div key={seller.id} className={styles.sellerCard}>
            <div className={styles.sellerInfo}>
              <span className={styles.sellerName}>{seller.name}</span>
              <span className={styles.sellerDate}>Data do cadastro: {seller.registrationDate}</span>
            </div>
            <div className={styles.sellerActions}>
              {/* No futuro, este botão levará para a página de detalhes */}
              <button className={styles.detailsButton}>Ver Detalhes</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
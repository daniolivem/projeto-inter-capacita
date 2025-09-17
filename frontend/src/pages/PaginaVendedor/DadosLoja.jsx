import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './PaginaVendedor.module.css'; // Reutilizando os estilos principais

// Este componente cuida apenas da seção "Dados da Minha Loja" e do modal
const DadosLoja = () => {
    const { user } = useAuth();
    const [sellerData, setSellerData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editableData, setEditableData] = useState({});
    const [saving, setSaving] = useState(false);

    // Função para buscar dados do perfil
    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch('http://localhost:3001/api/auth/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Falha ao carregar dados do perfil');
            }

            const data = await response.json();
            setSellerData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Carrega os dados quando o componente monta
    useEffect(() => {
        if (user) {
            fetchProfile();
        }
    }, [user]);

    const handleEditData = () => {
        setEditableData({
            name: sellerData.name || '',
            email: sellerData.email || '',
            cnpj: sellerData.cnpj || '',
            phone: sellerData.phone || '',
            address: sellerData.address || ''
        });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditableData({});
    };

    const handleModalChange = (e) => {
        const { name, value } = e.target;
        setEditableData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        setSaving(true);
        
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch('http://localhost:3001/api/auth/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(editableData)
            });

            if (!response.ok) {
                throw new Error('Falha ao atualizar dados do perfil');
            }

            const result = await response.json();
            setSellerData(result.user);
            setIsModalOpen(false);
            setEditableData({});
            
            // Feedback visual de sucesso
            alert('Dados atualizados com sucesso!');
        } catch (err) {
            setError(err.message);
            alert('Erro ao salvar dados: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    // Estados de loading e error
    if (loading) {
        return (
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Dados da Minha Loja</h2>
                <div className={styles.loading}>Carregando dados...</div>
            </section>
        );
    }

    if (error) {
        return (
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Dados da Minha Loja</h2>
                <div className={styles.error}>Erro: {error}</div>
                <button onClick={fetchProfile} className={styles.actionButton}>
                    Tentar Novamente
                </button>
            </section>
        );
    }

    if (!sellerData) {
        return (
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Dados da Minha Loja</h2>
                <div className={styles.error}>Dados não encontrados</div>
            </section>
        );
    }

    return (
        <>
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Dados da Minha Loja</h2>
                    <button onClick={handleEditData} className={styles.actionButton}>
                        Editar Dados
                    </button>
                </div>
                <div className={styles.dataList}>
                    <div className={styles.dataField}>
                        <strong>Nome da Loja:</strong> <span>{sellerData.name}</span>
                    </div>
                    <div className={styles.dataField}>
                        <strong>Email:</strong> <span>{sellerData.email}</span>
                    </div>
                    <div className={styles.dataField}>
                        <strong>CNPJ:</strong> <span>{sellerData.cnpj || 'Não informado'}</span>
                    </div>
                    <div className={styles.dataField}>
                        <strong>Celular:</strong> <span>{sellerData.phone || 'Não informado'}</span>
                    </div>
                    <div className={styles.dataField}>
                        <strong>Endereço:</strong> <span>{sellerData.address || 'Não informado'}</span>
                    </div>
                    <div className={styles.dataField}>
                        <strong>Status:</strong> <span>{sellerData.status}</span>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                 <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h2>Editar Dados da Loja</h2>
                            <button onClick={handleCloseModal} className={styles.closeButton}>&times;</button>
                        </div>
                        <form onSubmit={handleSaveChanges} className={styles.modalForm}>
                            <div className={styles.formGroup}>
                                <label>Nome da Loja</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={editableData.name || ''} 
                                    onChange={handleModalChange}
                                    required 
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={editableData.email || ''} 
                                    onChange={handleModalChange}
                                    required 
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>CNPJ</label>
                                <input 
                                    type="text" 
                                    name="cnpj" 
                                    value={editableData.cnpj || ''} 
                                    onChange={handleModalChange} 
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Celular</label>
                                <input 
                                    type="text" 
                                    name="phone" 
                                    value={editableData.phone || ''} 
                                    onChange={handleModalChange} 
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Endereço</label>
                                <input 
                                    type="text" 
                                    name="address" 
                                    value={editableData.address || ''} 
                                    onChange={handleModalChange} 
                                />
                            </div>
                            <div className={styles.modalActions}>
                                <button 
                                    type="button" 
                                    onClick={handleCloseModal} 
                                    className={styles.cancelButton}
                                    disabled={saving}
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="submit" 
                                    className={styles.saveButton}
                                    disabled={saving}
                                >
                                    {saving ? 'Salvando...' : 'Salvar Alterações'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default DadosLoja;
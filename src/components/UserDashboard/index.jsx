import { useState } from 'react';
import './styles.css';

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('Meus Pedidos');

  // Dados do usuário
  const userProfile = {
    name: 'Francisco Antonio Pereira',
    email: 'francisco@gmail.com',
    cpf: '123.456.913-35',
    phone: '(85) 5555-5555',
    address: 'Rua João Pessoa, 333',
    neighborhood: 'Centro',
    city: 'Fortaleza, Ceará',
    zipCode: '433-8800',
    paymentMethod: '**** **** **** 1234',
  };

  // Dados dos pedidos
  const orders = [
    {
      id: '4438363562',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Produto em trânsito',
      statusClass: 'in-transit',
    },
    {
      id: '4438362482',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Finalizado',
      statusClass: 'completed',
    },
    {
      id: '4438361482',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Cancelado',
      statusClass: 'canceled',
    },
    {
      id: '4438360362',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Finalizado',
      statusClass: 'completed',
    },
    {
      id: '4438359362',
      product: 'Tênis Nike Revolution 6 Next Nature Masculino',
      status: 'Finalizado',
      statusClass: 'completed',
    },
  ];

  const sidebarItems = [
    'Meu Perfil',
    'Meus Pedidos',
    'Minhas Informações',
    'Métodos de Pagamento',
  ];

  const handleSidebarClick = item => {
    setActiveSection(item);
  };

  // Componente para seção "Meu Perfil"
  const ProfileSection = () => (
    <div>
      <h2 className='profile-title'>Meu Perfil</h2>
      <div className='profile-section'>
        <div className='profile-label'>Nome:</div>
        <div className='profile-info'>{userProfile.name}</div>
        <div className='profile-label'>Email:</div>
        <div className='profile-info'>{userProfile.email}</div>
      </div>
    </div>
  );

  // Componente para seção "Meus Pedidos"
  const OrdersSection = () => (
    <div>
      <div className='header'>
        <h1>Meus Pedidos</h1>
        <div className='status-header'>STATUS</div>
        <svg
          className='divider'
          xmlns='http://www.w3.org/2000/svg'
          width='832'
          height='2'
          viewBox='0 0 832 2'
          fill='none'
        >
          <path d='M1 1H831' stroke='#CCCCCC' strokeLinecap='round' />
        </svg>
      </div>

      <div className='orders-list'>
        {orders.map(order => (
          <div key={order.id} className='order-item'>
            <div className='order-details'>
              <div className='product-image-container'>
                <div className='product-image'></div>
              </div>
              <div className='order-info'>
                <div className='order-number'>Pedido nº {order.id}</div>
                <div className='product-name'>{order.product}</div>
              </div>
            </div>
            <div className={`status ${order.statusClass}`}>{order.status}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // Componente para seção "Minhas Informações"
  const PersonalInfoSection = () => (
    <div>
      <h2 className='profile-title'>Minhas Informações</h2>
      <div className='profile-edit'>Editar</div>
      <div className='profile-section'>
        <p className='divisor1'>
          <svg
            className='divider'
            xmlns='http://www.w3.org/2000/svg'
            width='832'
            height='2'
            viewBox='0 0 832 2'
            fill='none'
          >
            <path d='M1 1H831' stroke='#CCCCCC' strokeLinecap='round' />
          </svg>
        </p>
        <h3 className='profile-subtitle1'>Informações Pessoais</h3>
        <div className='profile-label'>Nome:</div>
        <div className='profile-info'>{userProfile.name}</div>
        <div className='profile-label'>CPF:</div>
        <div className='profile-info'>{userProfile.cpf}</div>
        <div className='profile-label'>Email:</div>
        <div className='profile-info'>{userProfile.email}</div>
        <div className='profile-label'>Celular:</div>
        <div className='profile-info'>{userProfile.phone}</div>
      </div>
      <div className='profile-section'>
        <p className='divisor2'>
          <svg
            className='divider'
            xmlns='http://www.w3.org/2000/svg'
            width='832'
            height='2'
            viewBox='0 0 832 2'
            fill='none'
          >
            <path d='M1 1H831' stroke='#CCCCCC' strokeLinecap='round' />
          </svg>
        </p>
        <h3 className='profile-subtitle2'>Informações de Entrega</h3>
        <div className='profile-label'>Endereço:</div>
        <div className='profile-info'>{userProfile.address}</div>
        <div className='profile-label'>Bairro:</div>
        <div className='profile-info'>{userProfile.neighborhood}</div>
        <div className='profile-label'>Cidade:</div>
        <div className='profile-info'>{userProfile.city}</div>
        <div className='profile-label'>CEP:</div>
        <div className='profile-info'>{userProfile.zipCode}</div>
      </div>
    </div>
  );

  // Componente para seção "Métodos de Pagamento"
  const PaymentMethodsSection = () => (
    <div>
      <h2 className='profile-title'>Métodos de Pagamento</h2>
      <div className='profile-section'>
        <div className='profile-label'>Cartão:</div>
        <div className='profile-info'>{userProfile.paymentMethod}</div>
      </div>
    </div>
  );

  // Função para renderizar o conteúdo baseado na seção ativa
  const renderContent = () => {
    switch (activeSection) {
      case 'Meu Perfil':
        return <ProfileSection />;
      case 'Meus Pedidos':
        return <OrdersSection />;
      case 'Minhas Informações':
        return <PersonalInfoSection />;
      case 'Métodos de Pagamento':
        return <PaymentMethodsSection />;
      default:
        return null;
    }
  };

  // Determinando qual classe de container usar baseado na seção ativa
  const containerClass =
    activeSection === 'Meus Pedidos'
      ? 'order-tracking-container'
      : 'profile-container';

  return (
    <div className={containerClass}>
      {/* Sidebar */}
      <div className='sidebar'>
        {sidebarItems.map(item => (
          <div
            key={item}
            className={`sidebar-item${item === activeSection ? ' active' : ''}`}
            onClick={() => handleSidebarClick(item)}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div
        className={
          activeSection === 'Meus Pedidos'
            ? 'main-content'
            : 'profile-main-content'
        }
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default UserDashboard;

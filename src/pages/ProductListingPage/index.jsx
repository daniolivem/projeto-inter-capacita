import { useEffect, useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import ProductListing from '../../components/ProductListing';
import CustomSelect from '../../components/CustomSelect'; // Importe o novo componente
import './ProductListingPage.css';
import Thumb1 from '../../public/product-thumb-1.svg';
import Thumb3 from '../../public/product-thumb-3.svg';
import Thumb4 from '../../public/product-thumb-4.svg';
import Section from '../../components/Section';

// Array de produtos com valores de desconto pré-calculados
const products = [
  {
    id: 1,
    name: 'Nike Air Force 1',
    image: Thumb1,
    price: 200,
    priceDiscount: 140,
    tagValue: '30% Off',
  },
  {
    id: 2,
    name: 'Nike Air Force 2',
    image: Thumb1,
    price: 150,
    priceDiscount: 105,
    tagValue: '30% Off',
  },
  {
    id: 3,
    name: 'Nike Air Force 3',
    image: Thumb3,
    price: 300,
    priceDiscount: 210,
  },
  {
    id: 4,
    name: 'Nike Air Force 4',
    image: Thumb4,
    price: 100,
    priceDiscount: 70,
  },
  {
    id: 5,
    name: 'Nike Air Force 5',
    image: Thumb1,
    price: 200,
    priceDiscount: 140,
  },
  {
    id: 6,
    name: 'Nike Air Force 6',
    image: Thumb4,
    price: 150,
    priceDiscount: 105,
  },
];

const ProductListingPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    marca: [],
    categoria: [],
    genero: [],
    estado: [],
  });
  const [sortBy, setSortBy] = useState('mais-relevantes');

  // Estado para verificar o tamanho da tela
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 460);

  // Estado para controlar a visibilidde do sidebar (filtro de produtos)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Opções do select de ordenação
  const sortOptions = [
    { value: 'mais-relevantes', label: 'mais relevantes' },
    { value: 'menor-preco', label: 'menor preço' },
    { value: 'maior-preco', label: 'maior preço' },
    { value: 'mais-vendidos', label: 'mais vendidos' },
  ];

  // Verificar o tamanho da tela quando o componente montar e quando a janela for redimensionada
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 460;
      setIsMobile(mobile);
      // Se a tela não for mais mobile, garantir que o sidebar feche
      if (!mobile) {
        setIsSidebarOpen(false);
      }
    };

    // Adicionar o evento de redimensionamento
    window.addEventListener('resize', handleResize);
    // Chamar handleResize uma vez para definir o estado inicial corretamente
    handleResize();

    // Remover o evento de redimensionamento quando o componente desmontar
    // para evitar problemas de memória
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Array de dependências vazio para executar apenas na montagem e desmontagem

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value],
    }));
  };

  const handleAddToCart = product => {
    console.log('Adicionado ao carrinho:', product);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {isMobile && isSidebarOpen && (
        <div className='sidebar-overlay' onClick={toggleSidebar}></div>
      )}
      {/* Header com resultados e ordenação */}
      <div className='listing-header'>
        <div className='results-info'>
          <h2>Resultados para "Nike" - 389 produtos</h2>
        </div>

        {/* Substituição do select nativo pelo customizado */}
        <div className='sort-container'>
          <CustomSelect
            value={sortBy}
            onChange={setSortBy}
            options={sortOptions}
          />
        </div>

        {/* Wrapper para o ícone de filtro, visível apenas em mobile */}
        <div
          className='filter-icon-wrapper'
          onClick={isMobile ? toggleSidebar : null}
        >
          {isMobile && <CiFilter size={24} color='white' />}
        </div>
      </div>

      <Section>
        <div className='content-container'>
          {/* Sidebar com filtros, não estão funcionais */}
          <aside
            className={`filters-sidebar ${isMobile && isSidebarOpen ? 'open' : ''} ${!isMobile ? 'desktop-visible' : ''}`}
          >
            <h3>Filtrar por</h3>

            {/* Filtro por Marca */}
            <div className='filter-group'>
              <h4>Marca</h4>
              <div className='filter-options'>
                {['Adidas', 'Calenciaga', 'K-Swiss', 'Nike', 'Puma'].map(
                  marca => (
                    <label key={marca} className='filter-option'>
                      <input
                        type='checkbox'
                        checked={selectedFilters.marca.includes(marca)}
                        onChange={() => handleFilterChange('marca', marca)}
                      />
                      <span>{marca}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Filtro por Categoria */}
            <div className='filter-group'>
              <h4>Categoria</h4>
              <div className='filter-options'>
                {['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'].map(
                  categoria => (
                    <label key={categoria} className='filter-option'>
                      <input
                        type='checkbox'
                        checked={selectedFilters.categoria.includes(categoria)}
                        onChange={() =>
                          handleFilterChange('categoria', categoria)
                        }
                      />
                      <span>{categoria}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Filtro por Gênero */}
            <div className='filter-group'>
              <h4>Gênero</h4>
              <div className='filter-options'>
                {['Masculino', 'Feminino', 'Unissex'].map(genero => (
                  <label key={genero} className='filter-option'>
                    <input
                      type='checkbox'
                      checked={selectedFilters.genero.includes(genero)}
                      onChange={() => handleFilterChange('genero', genero)}
                    />
                    <span>{genero}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filtro por Estado */}
            <div className='filter-group'>
              <h4>Estado</h4>
              <div className='filter-options'>
                {['Novo', 'Usado'].map(estado => (
                  <label key={estado} className='filter-option'>
                    <input
                      type='checkbox'
                      checked={selectedFilters.estado.includes(estado)}
                      onChange={() => handleFilterChange('estado', estado)}
                    />
                    <span>{estado}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid de produtos */}
          <main className='products-grid'>
            <ProductListing $isPageProducts products={products} />
            <ProductListing $isPageProducts products={products} />
            <ProductListing $isPageProducts products={products} />
          </main>
        </div>
      </Section>
    </div>
  );
};

export default ProductListingPage;

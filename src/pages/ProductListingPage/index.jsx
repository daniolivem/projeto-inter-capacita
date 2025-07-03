import { useEffect, useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import ProductListing from '../../components/ProductListing';
import CustomSelect from '../../components/CustomSelect'; // Importe o novo componente
import './ProductListingPage.css';
import Section from '../../components/Section';
import products from '../../data/products.json';



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

  // Função para filtrar produtos baseada nos filtros selecionados
  const getFilteredProducts = () => {
    let filtered = products;

    // Filtrar por marca
    if (selectedFilters.marca.length > 0) {
      filtered = filtered.filter(product => 
        selectedFilters.marca.includes(product.brand)
      );
    }

    // Filtrar por categoria
    if (selectedFilters.categoria.length > 0) {
      filtered = filtered.filter(product => 
        selectedFilters.categoria.includes(product.category)
      );
    }

    // Ordenar produtos
    switch (sortBy) {
      case 'menor-preco':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'maior-preco':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'mais-vendidos':
        // Simular produtos mais vendidos (pode ser baseado em rating)
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Manter ordem original para "mais relevantes"
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  // Extrair marcas e categorias únicas dos produtos
  const getUniqueValues = (key) => {
    return [...new Set(products.map(product => product[key]).filter(Boolean))];
  };

  const uniqueBrands = getUniqueValues('brand');
  const uniqueCategories = getUniqueValues('category');

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
                {uniqueBrands.slice(0, 10).map(marca => (
                  <label key={marca} className='filter-option'>
                    <input
                      type='checkbox'
                      checked={selectedFilters.marca.includes(marca)}
                      onChange={() => handleFilterChange('marca', marca)}
                    />
                    <span>{marca}</span>
                  </label>
                ))}
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
            <ProductListing $isPageProducts products={filteredProducts} />
          </main>
        </div>
      </Section>
    </div>
  );
};

export default ProductListingPage;

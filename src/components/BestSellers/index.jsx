import './BestSellers.css';
import ProductListing from '../ProductListing';
import products from '../../data/products.json';
import { bestSellersConfig } from '../../data/bestSellersConfig';
import { priceUtils } from '../../utils/priceUtils';

const BestSellers = ({ 
  maxProducts = bestSellersConfig.maxProducts,
  filterCriteria = bestSellersConfig.filterCriteria,
  className = '' 
}) => {
  // Função para filtrar produtos mais vendidos
  const getBestSellingProducts = () => {
    let filteredProducts = products;
    
    // Aplicar critério de filtro das configurações
    if (filterCriteria) {
      filteredProducts = products.filter(filterCriteria);
    }
    
    // Priorizar categorias específicas
    const prioritizedProducts = filteredProducts.sort((a, b) => {
      const aPriority = bestSellersConfig.priorityCategories.indexOf(a.category);
      const bPriority = bestSellersConfig.priorityCategories.indexOf(b.category);
      
      // Se ambos estão nas categorias prioritárias, ordenar por índice
      if (aPriority !== -1 && bPriority !== -1) {
        return aPriority - bPriority;
      }
      
      // Se apenas um está nas prioritárias, dar prioridade
      if (aPriority !== -1) return -1;
      if (bPriority !== -1) return 1;
      
      // Se nenhum está nas prioritárias, ordenar por preço (simulando vendas)
      const priceA = priceUtils.parsePrice(a.price);
      const priceB = priceUtils.parsePrice(b.price);
      return priceB - priceA;
    });
    
    return prioritizedProducts.slice(0, maxProducts);
  };

  const bestSellingProducts = getBestSellingProducts();

  return (
    <section className={`best-sellers ${className}`}>
      <ProductListing products={bestSellingProducts} />
    </section>
  );
};

export default BestSellers;

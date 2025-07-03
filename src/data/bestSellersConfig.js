import { priceUtils } from '../utils/priceUtils';

// Configurações para produtos campeões de vendas
export const bestSellersConfig = {
  // Quantidade máxima de produtos a exibir
  maxProducts: 8,
  
  // Categorias priorizadas para campeões de vendas
  priorityCategories: [
    'graphics-cards',
    'processors', 
    'motherboards',
    'memory'
  ],
  
  // Critério de filtro para produtos em destaque
  filterCriteria: (product) => {
    // Validação de segurança
    if (!product || !priceUtils.isValidPrice(product.price)) {
      return false;
    }
    
    // Produtos com preço acima de R$ 200 (simulando produtos premium)
    const price = priceUtils.parsePrice(product.price);
    return price >= 200;
  },
  
  // Configurações de exibição
  displayConfig: {
    showDiscount: true,
    showRating: true,
    showStock: false,
    highlightBestSeller: true
  }
};

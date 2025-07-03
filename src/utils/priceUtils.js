// Utilitários para manipulação de preços
export const priceUtils = {
  // Converte qualquer formato de preço para número
  parsePrice: (price) => {
    if (typeof price === 'number') {
      return price;
    }
    
    if (typeof price === 'string') {
      // Remove símbolos e converte para número
      const cleanPrice = price
        .replace(/R\$\s*/g, '')
        .replace(/\./g, '')  // Remove pontos (milhares)
        .replace(/,/g, '.')  // Troca vírgula por ponto (decimal)
        .trim();
      
      const parsed = parseFloat(cleanPrice);
      return isNaN(parsed) ? 0 : parsed;
    }
    
    return 0;
  },
  
  // Formata número para exibição em reais
  formatPrice: (price) => {
    const numPrice = typeof price === 'number' ? price : priceUtils.parsePrice(price);
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(numPrice);
  },
  
  // Valida se um preço é válido
  isValidPrice: (price) => {
    const parsed = priceUtils.parsePrice(price);
    return !isNaN(parsed) && parsed >= 0;
  }
};

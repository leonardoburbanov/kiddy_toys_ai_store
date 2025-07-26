import { searchProducts, searchProductsByDescription } from './products';

/**
 * Simple function to get relevant products based on a query
 * This will be used by the AI to determine which products to show
 */
export function getRelevantProducts(query: string) {
  // Search for products based on the query
  const productMatches = searchProducts(query);
  const descriptionMatches = searchProductsByDescription(query);
  
  // Also search for Spanish terms
  const spanishTerms = {
    'código': 'coding',
    'programación': 'programming',
    'robot': 'robot',
    'jueguetes': 'toys',
    'aprender': 'learning',
    'desarrollo': 'development',
    'estimulación': 'stimulation',
    'bebé': 'baby',
    'niños': 'children',
    'educativo': 'educational'
  };
  
  let spanishMatches: any[] = [];
  for (const [spanish, english] of Object.entries(spanishTerms)) {
    if (query.toLowerCase().includes(spanish)) {
      const matches = searchProducts(english);
      spanishMatches = [...spanishMatches, ...matches];
    }
  }
  
  // Combine and deduplicate results
  const allMatches = [...productMatches, ...descriptionMatches, ...spanishMatches];
  const relevantProducts = allMatches.filter((product, index, self) => 
    index === self.findIndex(p => p.id === product.id)
  );
  
  return relevantProducts;
} 
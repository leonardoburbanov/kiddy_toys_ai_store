import { Product } from './types';

/**
 * All available products in the KIDDY TOYS AI store
 */
export const allProducts: Product[] = [
  {
    id: 1,
    name: "Smart Learning Flashcard Device",
    price: "$19.99 USD",
    image: "/products/tarjetas_inteligentes.jpg",
    description: "Interactive flashcard device that helps children learn letters, numbers, colors, and shapes through engaging audio and visual feedback.",
    ageRange: "3-6 years",
    utility: [
      "Early literacy development",
      "Number recognition",
      "Color and shape identification",
      "Fine motor skills",
      "Auditory learning",
      "Visual memory enhancement"
    ]
  },
  {
    id: 2,
    name: "Spike the Fine Motor Hedgehog®",
    price: "$19.99 USD",
    image: "/products/spike.jpg",
    description: "Adorable hedgehog toy with colorful quills that children can remove and replace, developing fine motor skills and color recognition.",
    ageRange: "18 months - 4 years",
    utility: [
      "Fine motor skill development",
      "Hand-eye coordination",
      "Color recognition and sorting",
      "Counting and number skills",
      "Problem-solving abilities",
      "Sensory exploration"
    ]
  },
  {
    id: 3,
    name: "Botley® 2.0 the Coding Robot Activity Set",
    price: "$199.99 USD",
    image: "/products/bot.jpg",
    description: "Screen-free coding robot that introduces children to programming concepts through hands-on activities and problem-solving challenges.",
    ageRange: "5-10 years",
    utility: [
      "Introduction to coding concepts",
      "Logical thinking and problem-solving",
      "Sequential reasoning",
      "Spatial awareness",
      "Critical thinking skills",
      "STEM education foundation"
    ]
  },
  {
    id: 4,
    name: "Big Feelings Pineapple",
    price: "$129.99 USD",
    image: "/products/pineapple.jpg",
    description: "Emotional intelligence toy that helps children identify, understand, and express their feelings through interactive play and storytelling.",
    ageRange: "3-8 years",
    utility: [
      "Emotional intelligence development",
      "Social-emotional learning",
      "Communication skills",
      "Empathy building",
      "Self-awareness",
      "Conflict resolution skills"
    ]
  },
];

/**
 * Featured products for the homepage
 */
export const featuredProducts: Product[] = allProducts.slice(0, 3);

/**
 * Search products by name or price
 * @param query - Search query to filter products
 * @returns Array of products matching the query
 */
export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase().trim();
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.price.toLowerCase().includes(searchTerm)
  );
}

/**
 * Get product by ID
 * @param id - Product ID
 * @returns Product or undefined if not found
 */
export function getProductById(id: number): Product | undefined {
  return allProducts.find(product => product.id === id);
}

/**
 * Get all products
 * @returns Array of all products
 */
export function getAllProducts(): Product[] {
  return allProducts;
}

/**
 * Filter products by age range
 * @param minAge - Minimum age in years
 * @param maxAge - Maximum age in years
 * @returns Array of products suitable for the specified age range
 */
export function getProductsByAgeRange(minAge: number, maxAge: number): Product[] {
  return allProducts.filter(product => {
    const ageRange = product.ageRange;
    const [min, max] = ageRange.split('-').map(age => 
      parseInt(age.replace(/\D/g, ''))
    );
    return minAge >= min && maxAge <= max;
  });
}

/**
 * Filter products by utility type
 * @param utility - Specific utility to search for
 * @returns Array of products that provide the specified utility
 */
export function getProductsByUtility(utility: string): Product[] {
  const searchTerm = utility.toLowerCase();
  return allProducts.filter(product => 
    product.utility.some(u => u.toLowerCase().includes(searchTerm))
  );
}

/**
 * Search products by description
 * @param query - Search query to filter products by description
 * @returns Array of products with descriptions matching the query
 */
export function searchProductsByDescription(query: string): Product[] {
  const searchTerm = query.toLowerCase().trim();
  return allProducts.filter(product => 
    product.description.toLowerCase().includes(searchTerm)
  );
}

/**
 * Get all available utilities across all products
 * @returns Array of unique utility types
 */
export function getAllUtilities(): string[] {
  const utilities = new Set<string>();
  allProducts.forEach(product => {
    product.utility.forEach(util => utilities.add(util));
  });
  return Array.from(utilities).sort();
} 
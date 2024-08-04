// Represents a single product with various attributes
export interface ProductProps {
  id: number; 
  title: string; 
  description: string; 
  price: number; 
  discountPercentage: number; 
  rating: number; 
  stock: number; 
  brand: string; 
  category: string; 
  thumbnail: string; 
  images: [string, string, string, string]; 
  fdprocessedid: string; 
}

// Represents filter parameters for querying products
export interface FilterProps {
  limit: number; 
  skip?: number; 
}

// Represents search parameters including filtering options
export interface SearchParamsProps {
  searchParams: {
    limit: number; 
    skip?: number; 
  };
}

// Represents pagination button with page number and skip value
export interface PaginationButtonProps {
  pageNumber: number; 
  skip: number;
}

// Represents a category of products with a specific product ID
export interface CatProductsProps {
  productCat: string; 
  productId: number; 
}

// Represents an item in the shopping cart with its quantity
export interface CartItemProps {
  id: number; 
  quantity: number; 
}

// Represents context for managing the shopping cart
export interface ShopingCartContextProps {
  getItemQuantity: (id: number) => number; 
  increaseCartQuantity: (id: number) => void; 
  decreaseQuantity: (id: number) => void; 
  removeFromCart: (id: number) => void;
  calculateTotalPrice: (products: ProductProps[]) => number; 
  cartQuantity: number; 
  cartItems: CartItemProps[]; 
}

// Represents the props for an "Add to Cart" button with customization options
export interface AddToCartButtonProps {
  size?: "default" | "icon" | "sm" | "lg"; 
  style?: string; 
  variant?: 
    | "default" 
    | "link" 
    | "destructive" 
    | "outline" 
    | "secondary" 
    | "ghost"; 
  product: ProductProps; 
}

// Represents props for a section container with optional title and tagline
export interface SectionContainerProps {
  title?: string; 
  tagline?: string; 
  className?: string; 
}

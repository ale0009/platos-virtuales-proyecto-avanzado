import { createContext, useContext, useState } from 'react';
import { CartContextType as CartContextTypeImported, CartItem, Dish } from '@/types';
import { toast } from 'sonner';

// Define el tipo del contexto
interface CartContextType {
  addItem: (item: Dish) => void;
  // ... otros métodos o propiedades si es necesario
}

// Asegúrate de que el contexto use el tipo definido
export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (dish: Dish) => {
    setItems(current => {
      const existingItem = current.find(item => item.dish.id === dish.id);
      if (existingItem) {
        return current.map(item =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { dish, quantity: 1 }];
    });
    toast.success('Added to cart!');
  };

  const removeItem = (dishId: number) => {
    setItems(current => current.filter(item => item.dish.id !== dishId));
    toast.success('Removed from cart');
  };

  const updateQuantity = (dishId: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(dishId);
      return;
    }
    setItems(current =>
      current.map(item =>
        item.dish.id === dishId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success('Cart cleared');
  };

  const total = items.reduce(
    (sum, item) => sum + item.dish.price * item.quantity,
    0
  );

}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
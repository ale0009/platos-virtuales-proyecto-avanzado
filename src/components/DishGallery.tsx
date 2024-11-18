import { useState} from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Dish } from '../types';
import { DishViewer } from './DishViewer';
import { toast } from 'sonner';
import { 
  ChevronLeft, 
  ChevronRight,
  ShoppingCart
} from 'lucide-react';

interface DishGalleryProps {
  dishes: Dish[];
  selectedDish: Dish;
  onSelectDish: (dish: Dish) => void;
}

export function DishGallery({ dishes, selectedDish, onSelectDish }: DishGalleryProps) {
  const { addItem } = useCart();

  const handlePrevious = () => {
    const currentIndex = dishes.findIndex(dish => dish.id === selectedDish.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : dishes.length - 1;
    onSelectDish(dishes[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = dishes.findIndex(dish => dish.id === selectedDish.id);
    const nextIndex = currentIndex < dishes.length - 1 ? currentIndex + 1 : 0;
    onSelectDish(dishes[nextIndex]);
  };

  const handleAddToCart = () => {
    addItem(selectedDish);
    toast.success(`${selectedDish.name} added to cart!`);
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">{selectedDish.name}</h2>
            <p className="text-muted-foreground">Explora el plato en 3D y descubre sus detalles</p>
          </div>
          <div className="flex items-center gap-2">
          <Button 
                onClick={handleAddToCart}
                className="bg-rose-500 hover:bg-rose-600 text-white gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
            
          </div>
        </div>
        
        <div className="relative group bg-card rounded-lg shadow-inner">
          <div className="h-[300px] md:h-[500px] w-full">
            <DishViewer dish={selectedDish} />
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-6  pb-2 scrollbar-hide">
          {dishes.map((dish) => (
            <Button
              key={dish.id}
              variant={selectedDish.id === dish.id ? "default" : "outline"}
              className="flex-shrink-0 transition-all hover:scale-105"
              onClick={() => onSelectDish(dish)}
            >
              {dish.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
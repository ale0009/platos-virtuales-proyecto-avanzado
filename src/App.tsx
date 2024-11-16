import { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { SpecialOffers } from './components/SpecialOffers';
import { DishGallery } from './components/DishGallery';
import { NutritionPanel } from './components/NutritionPanel';
import { FeedbackSection } from './components/FeedbackSection';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Contact } from './components/Contact';
import { dishes } from './data/dishes';
import { ThemeProvider } from './components/ThemeProvider';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { Toaster } from '@/components/ui/sonner';
import { Routes, Route, Navigate } from 'react-router-dom';


export type Section = 'home' | 'menu' | 'about' | 'contact';

export default function App() {
  const [selectedDish, setSelectedDish] = useState(dishes[0]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AuthProvider>
        <CartProvider>
          <Layout>
            <Routes>
              {/* Ruta principal */}
              <Route
                path="/"
                element={
                  <div className="space-y-16">
                    <Hero />
                    <div className="px-4 md:px-6 max-w-7xl mx-auto w-full">
                      <SpecialOffers />
                      <div className="grid gap-8 lg:grid-cols-2 mt-16">
                        <DishGallery
                          dishes={dishes}
                          selectedDish={selectedDish}
                          onSelectDish={setSelectedDish}
                        />
                        <div className="space-y-8">
                          <NutritionPanel dish={selectedDish} />s
                          <FeedbackSection />
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* Otras rutas */}
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

            </Routes>
          </Layout>
          <Toaster />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

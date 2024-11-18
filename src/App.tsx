import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { useState } from 'react';
import { SpecialOffers } from './components/SpecialOffers';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Contact } from './components/Contact';
import { ThemeProvider } from './components/ThemeProvider';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from '@/components/ui/sonner';
import { Routes, Route, } from 'react-router-dom';
import { DishGallery } from './components/DishGallery';
import { NutritionPanel } from './components/NutritionPanel';
import { FeedbackSection } from './components/FeedbackSection';
import { AdminDashboard } from './components/AdminDashboard';
import { dishes } from './data/dishes';
import { CartProvider } from './contexts/CartContext';

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
                        <NutritionPanel dish={selectedDish} />
                        <FeedbackSection />
                      </div>
                    </div>
                  </div>
                </div>
              }
            />

            {/* Otras rutas */}
            <Route path="/Admin" element={<AdminDashboard />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </Layout>
      </CartProvider>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

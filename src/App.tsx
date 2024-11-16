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

export type Section = 'home' | 'menu' | 'about' | 'contact';

function App() {
  const [selectedDish, setSelectedDish] = useState(dishes[0]);
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'menu':
        return <Menu />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
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
        );
    }
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AuthProvider>
        <CartProvider>
          <Layout currentSection={currentSection} onNavigate={setCurrentSection}>
            {renderSection()}
          </Layout>
          <Toaster />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
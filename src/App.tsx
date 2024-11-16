import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { SpecialOffers } from './components/SpecialOffers';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Contact } from './components/Contact';
import { ThemeProvider } from './components/ThemeProvider';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from '@/components/ui/sonner';
import { Routes, Route, } from 'react-router-dom';


export type Section = 'home' | 'menu' | 'about' | 'contact';

export default function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AuthProvider>
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
                       
                        <div className="space-y-8">
                          
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
      </AuthProvider>
    </ThemeProvider>
  );
}

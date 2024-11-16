import { ModeToggle } from './ModeToggle';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Utensils, Menu as MenuIcon } from 'lucide-react';
import { Section } from '../App';
import { AuthDialog } from './AuthDialog';
import { CartSheet } from './CartSheet';
import { UserMenu } from './UserMenu';
import { useAuth } from '@/contexts/AuthContext';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface LayoutProps {
  children: React.ReactNode;
}

const navItems: { label: string; path: string }[] = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Layout({ children }: LayoutProps) {
  const { user } = useAuth();
  const location = useLocation(); // Detecta la ruta actual
  const navigate = useNavigate(); // Para navegación manual

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="rounded-full bg-rose-500 p-2">
              <Utensils className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Platos virtuales</span>
          </div>
          
          <nav className="hidden md:flex mx-6 flex-1 items-center justify-center space-x-4 md:space-x-6">
            {navItems.map((item) => (
              <Link to={item.path} key={item.path}>
              <Button
                variant={location.pathname === item.path ? "default" : "ghost"}
              >
                {item.label}
              </Button>
            </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4 ml-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                   <Link to={item.path} key={item.path}>
                   <Button
                     variant={location.pathname === item.path ? "default" : "ghost"}
                     className="w-full justify-start"
                   >
                     {item.label}
                   </Button>
                 </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <CartSheet />
            <ModeToggle />
            {user ? <UserMenu /> : <AuthDialog />}
          </div>
        </div>
      </header>

      <main className="w-full">
        {children}
      </main>

      <footer className="border-t bg-muted/50">
        <div className="w-full px-4 md:px-6 py-12 max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="rounded-full bg-rose-500 p-2">
                  <Utensils className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Platos virtuales</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Best cooks and best delivery guys all at your service.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="cursor-pointer hover:text-foreground" onClick={() => navigate('/about')}>About Us</li>
                <li className="cursor-pointer hover:text-foreground">Careers</li>
                <li className="cursor-pointer hover:text-foreground" onClick={() => navigate('/contact')}>Contact Us</li>
                <li className="cursor-pointer hover:text-foreground">Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Foodies</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="cursor-pointer hover:text-foreground">Community</li>
                <li className="cursor-pointer hover:text-foreground">Developers</li>
                <li className="cursor-pointer hover:text-foreground">Advertising</li>
                <li className="cursor-pointer hover:text-foreground">Restaurants</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Download Our App</h3>
              <div className="space-y-4">
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  App Store
                </Button>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  Google Play
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Platos virtuales. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
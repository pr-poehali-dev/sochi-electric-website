import React from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-primary font-montserrat">
            <h1 className="text-xl font-bold leading-none">СОЧИЭНЕРГОСТРОЙ</h1>
            <p className="text-xs text-muted-foreground">
              Комплексные решения в электроснабжении
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="font-medium hover:text-primary transition-colors"
          >
            Услуги
          </a>
          <a
            href="#about"
            className="font-medium hover:text-primary transition-colors"
          >
            О компании
          </a>
          <a
            href="#projects"
            className="font-medium hover:text-primary transition-colors"
          >
            Проекты
          </a>
          <a
            href="#contact"
            className="font-medium hover:text-primary transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <p className="font-medium">+7 (989) 169-09-07</p>
            <p className="text-sm text-muted-foreground">Пн-Пт: 9:00-18:00</p>
          </div>
          <Button className="btn-primary flex items-center gap-2">
            <Phone size={18} />
            <span>Заказать звонок</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-bold text-lg">Меню</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={24} />
                </Button>
              </div>
              <nav className="flex flex-col gap-6">
                <a
                  href="#services"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Услуги
                </a>
                <a
                  href="#about"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О компании
                </a>
                <a
                  href="#projects"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Проекты
                </a>
                <a
                  href="#contact"
                  className="font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </a>
              </nav>
              <div className="mt-auto pt-6 border-t">
                <p className="font-medium">+7 (862) 123-45-67</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Пн-Пт: 9:00-18:00
                </p>
                <Button className="w-full">Заказать звонок</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">СочиЭнергоСтрой</h3>
            <p className="text-white/80 mb-4">
              Комплексные решения в сфере электроснабжения для жилых, коммерческих и промышленных объектов.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Проектирование электросетей</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Монтаж электрооборудования</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Электроизмерения</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Энергоэффективные решения</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Техническое обслуживание</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-secondary transition-colors">О компании</a></li>
              <li><a href="#projects" className="hover:text-secondary transition-colors">Проекты</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Сертификаты</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Вакансии</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/80">
              <li>г. Сочи, ул. Энергетиков, 10, офис 205</li>
              <li>Телефон: +7 (862) 123-45-67</li>
              <li>Email: info@sochienergo.ru</li>
              <li>Пн-Пт: 9:00-18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm mb-4 md:mb-0">
            © 2024 СочиЭнергоСтрой. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/80 hover:text-secondary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-white/80 hover:text-secondary transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

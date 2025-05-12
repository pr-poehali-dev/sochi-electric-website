
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const About = () => {
  const advantages = [
    "Высококвалифицированные сертифицированные специалисты",
    "Комплексный подход к решению задач электроснабжения",
    "Использование только качественных материалов и оборудования",
    "Строгое соблюдение сроков выполнения работ",
    "Гарантийное обслуживание и техническая поддержка"
  ];

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-in">
            <div className="absolute top-4 -left-4 w-24 h-24 bg-secondary rounded-lg -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1581092921461-7261b8a79805?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Команда Сочиэнергострой"
              className="w-full h-auto rounded-lg shadow-lg object-cover z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-lg">
              <p className="text-white font-montserrat font-bold text-4xl">12+</p>
              <p className="text-white/90 text-sm">лет опыта работы</p>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании СочиЭнергоСтрой</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Компания "СочиЭнергоСтрой" специализируется на предоставлении полного спектра услуг в области электроснабжения в Сочи и Краснодарском крае. 
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Мы работаем как с частными лицами, так и с коммерческими и промышленными объектами, обеспечивая надежные и энергоэффективные решения для любых задач.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Наши преимущества:</h3>
              <ul className="space-y-3">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="text-primary shrink-0 mt-1" size={20} />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button className="group">
              Узнать больше
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

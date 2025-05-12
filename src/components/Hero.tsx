
import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-accent to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Zap size={16} className="text-primary" />
              <span>Надежное электроснабжение</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Комплексные решения электроснабжения <span className="text-primary">для вашего бизнеса</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Мы берем на себя полный спектр работ по проектированию, монтажу и обслуживанию систем электроснабжения любой сложности в Сочи и Краснодарском крае.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-base" size="lg">
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="group">
                Наши услуги
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="flex items-center gap-8 mt-10">
              <div>
                <p className="text-3xl font-bold text-primary">12+</p>
                <p className="text-sm text-muted-foreground">лет опыта</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">300+</p>
                <p className="text-sm text-muted-foreground">проектов</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">клиентов довольны</p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -inset-2 bg-primary/5 rounded-xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1622473590773-f588134b6ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Электромонтаж"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 h-3 w-3 rounded-full pulse"></div>
                <p className="font-medium">Сертифицированные специалисты</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

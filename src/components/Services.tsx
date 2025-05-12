
import React from 'react';
import { Activity, Lightbulb, Plug, Shield, Wrench, Zap } from 'lucide-react';
import Icon from './ui/icon';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="card-service group animate-fade-in">
    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <Icon name={icon} className="text-primary" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: "Zap",
      title: "Проектирование электросетей",
      description: "Разработка проектной документации для систем электроснабжения с учетом всех требований и норм."
    },
    {
      icon: "Plug",
      title: "Монтаж электрооборудования",
      description: "Профессиональный монтаж электросетей, щитового оборудования и систем освещения."
    },
    {
      icon: "Activity",
      title: "Электроизмерения и испытания",
      description: "Проведение измерений сопротивления изоляции, заземления и защитных средств."
    },
    {
      icon: "Lightbulb",
      title: "Энергоэффективные решения",
      description: "Внедрение современных энергосберегающих технологий для снижения затрат на электроэнергию."
    },
    {
      icon: "Wrench",
      title: "Техническое обслуживание",
      description: "Регулярное обслуживание и оперативный ремонт электрооборудования любой сложности."
    },
    {
      icon: "Shield",
      title: "Системы молниезащиты",
      description: "Проектирование и монтаж систем молниезащиты для зданий и сооружений."
    }
  ];

  return (
    <section id="services" className="section bg-accent">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-muted-foreground">
            Мы предоставляем полный комплекс услуг в сфере электроснабжения, от проектирования до технического обслуживания
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

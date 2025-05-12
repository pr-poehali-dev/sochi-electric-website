import React from "react";
import { Activity, Lightbulb, Plug, Shield, Wrench, Zap } from "lucide-react";
import Icon from "./ui/icon";
import { Button } from "./ui/button";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  price,
}) => (
  <div className="card-service group animate-fade-in">
    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <Icon name={icon} className="text-primary" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <div className="flex justify-between items-center mt-auto">
      <span className="text-primary font-semibold">{price}</span>
      <Button variant="outline" size="sm" className="text-xs">
        Подробнее
      </Button>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: "Zap",
      title: "Проектирование электросетей",
      description:
        "Разработка проектной документации для систем электроснабжения с учетом всех требований и норм.",
      price: "от 5 000 ₽",
    },
    {
      icon: "Plug",
      title: "Монтаж электрооборудования",
      description:
        "Профессиональный монтаж электросетей, щитового оборудования и систем освещения.",
      price: "от 7 500 ₽",
    },
    {
      icon: "Activity",
      title: "Электроизмерения и испытания",
      description:
        "Проведение измерений сопротивления изоляции, заземления и защитных средств.",
      price: "от 5 000 ₽",
    },
    {
      icon: "Lightbulb",
      title: "Энергоэффективные решения",
      description:
        "Внедрение современных энергосберегающих технологий для снижения затрат на электроэнергию.",
      price: "от 10 000 ₽",
    },
    {
      icon: "Wrench",
      title: "Техническое обслуживание",
      description:
        "Регулярное обслуживание и оперативный ремонт электрооборудования любой сложности.",
      price: "от 5 000 ₽",
    },
    {
      icon: "Shield",
      title: "Системы молниезащиты",
      description:
        "Проектирование и монтаж систем молниезащиты для зданий и сооружений.",
      price: "от 8 500 ₽",
    },
  ];

  return (
    <section id="services" className="section bg-accent">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-muted-foreground">
            Мы предоставляем полный комплекс услуг в сфере электроснабжения, от
            проектирования до технического обслуживания
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

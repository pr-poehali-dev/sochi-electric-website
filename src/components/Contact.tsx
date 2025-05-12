
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-accent">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Если у вас есть вопросы или вы хотите получить консультацию по нашим услугам, заполните форму, и мы свяжемся с вами в ближайшее время.
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Ваше имя" className="w-full" />
                </div>
                <div>
                  <Input placeholder="Номер телефона" className="w-full" />
                </div>
              </div>
              <div>
                <Input placeholder="Email" className="w-full" />
              </div>
              <div>
                <Textarea placeholder="Ваше сообщение" className="w-full" rows={5} />
              </div>
              <Button type="submit" className="w-full">Отправить заявку</Button>
            </form>
          </div>
          
          <div className="animate-fade-in">
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2.5">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-lg">+7 (862) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2.5">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-lg">info@sochienergo.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2.5">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-lg">г. Сочи, ул. Энергетиков, 10, офис 205</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2.5">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p>Пн-Пт: 9:00-18:00</p>
                    <p>Сб-Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

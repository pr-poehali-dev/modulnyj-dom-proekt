import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Модель Nordic",
      area: "120 м²",
      bedrooms: 3,
      price: "от 4 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/799be027-c95a-44ca-8165-027025836f28/files/32616bb8-2c0d-4024-b610-61582000c064.jpg",
      features: ["Панорамные окна", "Терраса", "Умный дом"]
    },
    {
      id: 2,
      title: "Модель Contemporary",
      area: "150 м²",
      bedrooms: 4,
      price: "от 5 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/799be027-c95a-44ca-8165-027025836f28/files/4cf2663b-a18b-45b0-9b5f-4954708ee4cf.jpg",
      features: ["Два этажа", "Экологичные материалы", "Гараж"]
    },
    {
      id: 3,
      title: "Модель Compact",
      area: "80 м²",
      bedrooms: 2,
      price: "от 3 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/799be027-c95a-44ca-8165-027025836f28/files/1a982036-02df-48df-bbb6-b647d3903518.jpg",
      features: ["Энергоэффективность", "Быстрый монтаж", "Компактность"]
    }
  ];

  const advantages = [
    {
      icon: "Zap",
      title: "Быстрое строительство",
      description: "Монтаж дома занимает от 2 до 4 недель"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "5 лет гарантии на конструкцию и материалы"
    },
    {
      icon: "Leaf",
      title: "Экологичность",
      description: "Используем только сертифицированные материалы"
    },
    {
      icon: "TrendingDown",
      title: "Экономия до 30%",
      description: "По сравнению с традиционным строительством"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="text-primary" size={28} />
            <span className="text-2xl font-bold">ModularHomes</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#timeline" className="text-foreground hover:text-primary transition-colors">Этапы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Заказать звонок</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-sm px-4 py-2">Инновации в строительстве</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Модульные дома<br />
              <span className="text-primary">нового поколения</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Технологичное строительство с гарантией качества. Экологичные материалы, 
              быстрый монтаж и индивидуальный подход к каждому проекту.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Выбрать проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Технологии и качество в каждой детали</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground">Готовые решения для комфортной жизни</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 text-foreground">
                      {project.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <Icon name="Maximize" size={18} className="text-primary" />
                        {project.area}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Bed" size={18} className="text-primary" />
                        {project.bedrooms} спальни
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="py-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Этапы строительства</h2>
            <p className="text-xl text-muted-foreground">От идеи до новоселья — прозрачный процесс</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Консультация и выбор проекта",
                  duration: "1-3 дня",
                  description: "Обсуждаем ваши пожелания, подбираем оптимальный проект, рассчитываем стоимость и сроки",
                  icon: "Lightbulb"
                },
                {
                  step: "02",
                  title: "Проектирование и согласование",
                  duration: "5-7 дней",
                  description: "Разрабатываем индивидуальный проект, готовим документацию, согласовываем все детали",
                  icon: "FileText"
                },
                {
                  step: "03",
                  title: "Производство модулей",
                  duration: "4-6 недель",
                  description: "Изготавливаем модули на заводе с контролем качества на каждом этапе производства",
                  icon: "Factory"
                },
                {
                  step: "04",
                  title: "Подготовка участка",
                  duration: "1-2 недели",
                  description: "Готовим фундамент и коммуникации под установку модульного дома",
                  icon: "HardHat"
                },
                {
                  step: "05",
                  title: "Монтаж и сборка",
                  duration: "2-4 недели",
                  description: "Доставляем модули на участок, проводим сборку и подключение всех систем",
                  icon: "Wrench"
                },
                {
                  step: "06",
                  title: "Финальная отделка",
                  duration: "1-2 недели",
                  description: "Завершаем отделочные работы, проводим финальную проверку всех систем",
                  icon: "Paintbrush"
                },
                {
                  step: "07",
                  title: "Сдача объекта",
                  duration: "1 день",
                  description: "Передаем ключи, документы и гарантийные обязательства. Добро пожаловать домой!",
                  icon: "Key"
                }
              ].map((stage, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center gap-8 animate-fade-in-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="text-lg font-bold px-3 py-1">{stage.step}</Badge>
                          <Badge variant="secondary" className="text-xs">
                            <Icon name="Clock" size={14} className="mr-1" />
                            {stage.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl">{stage.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{stage.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                      <Icon name={stage.icon} className="text-primary-foreground" size={28} />
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="py-8">
                <h3 className="text-2xl font-bold mb-2">Полный цикл: 8-12 недель</h3>
                <p className="text-lg text-muted-foreground">
                  От первой встречи до новоселья — вы всегда в курсе каждого этапа
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 shadow-2xl animate-scale-in">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl mb-4">Начните свой проект сегодня</CardTitle>
              <CardDescription className="text-lg">
                Оставьте заявку, и наш специалист свяжется с вами в течение часа
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <input 
                      type="text" 
                      placeholder="Иван Петров"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Интересующий проект</label>
                  <select className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                    <option>Выберите модель</option>
                    {projects.map(project => (
                      <option key={project.id}>{project.title}</option>
                    ))}
                  </select>
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} />
                <span className="text-xl font-bold">ModularHomes</span>
              </div>
              <p className="text-secondary-foreground/80">
                Инновационные решения для строительства вашего дома
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Контакты</h3>
              <div className="space-y-2 text-secondary-foreground/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@modularhomes.ru
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Режим работы</h3>
              <p className="text-secondary-foreground/80">
                Пн-Пт: 9:00 - 18:00<br />
                Сб-Вс: 10:00 - 16:00
              </p>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
            <p>© 2024 ModularHomes. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
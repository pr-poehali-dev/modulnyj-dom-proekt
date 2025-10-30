import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Модель Garden",
      area: "85 м²",
      bedrooms: 2,
      price: "от 3 800 000 ₽",
      image: "https://cdn.poehali.dev/files/6f017245-bde3-4e52-9f9b-df02b229656d.jpg",
      features: ["Панорамные окна", "Терраса", "Деревянная отделка"]
    },
    {
      id: 2,
      title: "Модель Eco Studio",
      area: "65 м²",
      bedrooms: 1,
      price: "от 2 900 000 ₽",
      image: "https://cdn.poehali.dev/files/0483524b-d9b3-4069-b841-e879b8cfbe48.jpg",
      features: ["Компактность", "Деревянный фасад", "Быстрый монтаж"]
    },
    {
      id: 3,
      title: "Модель Nordic",
      area: "120 м²",
      bedrooms: 3,
      price: "от 4 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/799be027-c95a-44ca-8165-027025836f28/files/32616bb8-2c0d-4024-b610-61582000c064.jpg",
      features: ["Панорамные окна", "Умный дом", "Терраса"]
    },
    {
      id: 4,
      title: "Модель Contemporary",
      area: "150 м²",
      bedrooms: 4,
      price: "от 5 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/799be027-c95a-44ca-8165-027025836f28/files/4cf2663b-a18b-45b0-9b5f-4954708ee4cf.jpg",
      features: ["Два этажа", "Экологичные материалы", "Гараж"]
    },
    {
      id: 5,
      title: "Модель Urban",
      area: "95 м²",
      bedrooms: 2,
      price: "от 4 100 000 ₽",
      image: "https://cdn.poehali.dev/projects/799be027-c95a-44ca-8165-027025836f28/files/0f56325b-b395-42b9-a7ba-6b67e9055a12.jpg",
      features: ["Металлический фасад", "Терраса", "Энергоэффективность"]
    },
    {
      id: 6,
      title: "Модель Compact",
      area: "80 м²",
      bedrooms: 2,
      price: "от 3 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/799be027-c95a-44ca-8165-027025836f28/files/1a982036-02df-48df-bbb6-b647d3903518.jpg",
      features: ["Компактность", "Быстрый монтаж", "Простая планировка"]
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
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold tracking-tight">FL-HAUS</span>
          </div>
          <nav className="hidden md:flex gap-10 text-sm">
            <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors font-medium">Проекты</a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors font-medium">О нас</a>
            <a href="#timeline" className="text-foreground/80 hover:text-foreground transition-colors font-medium">Этапы</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors font-medium">Контакты</a>
          </nav>
          <Button className="rounded-none font-medium">Консультация</Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/799be027-c95a-44ca-8165-027025836f28/files/c08b3fe9-b768-4c7e-80f4-5cbf3b3d9c12.jpg" 
            alt="Модульный дом"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in">
            Модульные дома<br />под ключ
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light animate-fade-in-up">
            От 100 000 ₽/м² • Срок производства от 3 месяцев
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="text-lg px-10 py-6 rounded-none bg-white text-black hover:bg-white/90">
              Смотреть проекты
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 rounded-none border-white text-white hover:bg-white/10">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-muted">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Ваш дом.<br />Ваши правила.</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Мы производим модульные дома для постоянного проживания по немецким стандартам качества. 
                Более 100 планировок на выбор с возможностью индивидуальной доработки.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {advantages.map((advantage, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold mb-2">{index === 0 ? '2-4' : index === 1 ? '5' : index === 2 ? '100%' : '30%'}</div>
                    <div className="text-sm font-medium">{advantage.title.replace('Быстрое строительство', 'недели').replace('Гарантия качества', 'лет гарантии').replace('Экологичность', 'экологично').replace('Экономия до 30%', 'экономия')}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-none overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/799be027-c95a-44ca-8165-027025836f28/files/9585444a-2990-4c27-868e-1e5f33c41b96.jpg" 
                alt="Интерьер"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Проекты домов</h2>
            <p className="text-xl text-muted-foreground">Более 100 готовых планировок</p>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="relative group cursor-pointer overflow-hidden aspect-square animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white mx-9 my-[17px] bg-gray-200 rounded-[0.25rem]">
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm mb-3">
                    <span>{project.area}</span>
                    <span>•</span>
                    <span>{project.bedrooms} спальни</span>
                  </div>
                  <p className="text-2xl font-bold mb-4">{project.price}</p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300\">\n                    <button className="border border-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors\">\n                      Подробнее\n                    </button>\n                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="py-32 px-6 bg-muted">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground">Прозрачный процесс от заявки до ключей</p>
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

      <section id="contact" className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Получить консультацию</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение часа. 
                Ответим на все вопросы и поможем выбрать оптимальный проект.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} />
                  <span className="text-lg">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} />
                  <span className="text-lg">info@fl-haus.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={24} />
                  <span className="text-lg">Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6 bg-muted p-10">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full px-6 py-4 border-none bg-background rounded-none focus:ring-2 focus:ring-primary transition-all text-lg"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон"
                    className="w-full px-6 py-4 border-none bg-background rounded-none focus:ring-2 focus:ring-primary transition-all text-lg"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-6 py-4 border-none bg-background rounded-none focus:ring-2 focus:ring-primary transition-all text-lg"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Ваш вопрос"
                    rows={4}
                    className="w-full px-6 py-4 border-none bg-background rounded-none focus:ring-2 focus:ring-primary transition-all text-lg resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-6 rounded-none">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-3xl font-bold mb-4">FL-HAUS</div>
              <p className="text-white/60 text-sm">
                Модульные дома для постоянного проживания
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <div className="space-y-2 text-white/80 text-sm">
                <p>О нас</p>
                <p>Проекты</p>
                <p>Технологии</p>
                <p>Контакты</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/80 text-sm">
                <p>+7 (495) 123-45-67</p>
                <p>info@fl-haus.ru</p>
                <p>СПб и ЛО</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Документы</h3>
              <div className="space-y-2 text-white/80 text-sm">
                <p>Политика конфиденциальности</p>
                <p>Договор оферты</p>
                <p>Реквизиты</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
            <p>© 2024 FL-HAUS. Все права защищены.</p>
            <p>Сделано с ❤️ для вашего комфорта</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
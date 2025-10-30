import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img src="https://cdn.poehali.dev/files/585e94bb-4452-4f55-99f5-6da6c99de09e.png" alt="SENDY" className="h-8" />
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Возможности</a>
            <a href="#cases" className="text-sm hover:text-primary transition-colors">Кейсы</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Тарифы</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
            <Button className="gradient-purple text-white border-0 hover:opacity-90">Начать бесплатно</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Email-маркетинг <span className="gradient-text">нового поколения</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Создавайте эффективные рассылки, автоматизируйте маркетинг и увеличивайте продажи с SENDY
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gradient-purple text-white border-0 hover:opacity-90 hover-scale">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Попробовать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="hover-scale">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
              <div className="flex gap-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span>Бесплатный тариф</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span>Без кредитной карты</span>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 gradient-purple opacity-20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/56c8da71-f5d9-4229-9e3c-293ee5265115/files/e27ac65f-7aba-436c-a2bb-a0285eefe434.jpg" 
                alt="Email Marketing Dashboard" 
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Возможности платформы</h2>
            <p className="text-xl text-muted-foreground">Всё необходимое для успешного email-маркетинга</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Mail",
                title: "Умный конструктор",
                description: "Создавайте красивые письма с помощью drag-and-drop редактора без навыков дизайна"
              },
              {
                icon: "Zap",
                title: "Автоматизация",
                description: "Настраивайте триггерные цепочки писем и автоматизируйте взаимодействие с клиентами"
              },
              {
                icon: "BarChart3",
                title: "Аналитика",
                description: "Отслеживайте открытия, клики и конверсии в режиме реального времени"
              },
              {
                icon: "Users",
                title: "Сегментация",
                description: "Делите аудиторию на сегменты и отправляйте персонализированные рассылки"
              },
              {
                icon: "Shield",
                title: "Высокая доставляемость",
                description: "Наша инфраструктура гарантирует доставку писем в inbox, а не в спам"
              },
              {
                icon: "Smartphone",
                title: "Адаптивный дизайн",
                description: "Все письма автоматически адаптируются под любые устройства"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="hover-scale border-2 hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Истории успеха</h2>
            <p className="text-xl text-muted-foreground">Наши клиенты достигают впечатляющих результатов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "E-commerce Store",
                result: "+185%",
                metric: "рост продаж",
                description: "Благодаря автоматическим триггерам и персонализации",
                logo: "ShoppingCart"
              },
              {
                company: "SaaS Startup",
                result: "+240%",
                metric: "open rate",
                description: "Сегментация аудитории увеличила вовлеченность",
                logo: "Rocket"
              },
              {
                company: "Digital Agency",
                result: "+320%",
                metric: "лидов",
                description: "Интеграция с CRM и воронки привели больше клиентов",
                logo: "Briefcase"
              }
            ].map((caseItem, index) => (
              <Card key={index} className="hover-scale text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full gradient-orange mx-auto mb-4 flex items-center justify-center">
                    <Icon name={caseItem.logo} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-3xl gradient-text">{caseItem.result}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    {caseItem.metric}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{caseItem.company}</p>
                  <p className="text-sm">{caseItem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Прозрачные тарифы</h2>
            <p className="text-xl text-muted-foreground">Выберите план, который подходит вашему бизнесу</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Бесплатно",
                period: "",
                features: [
                  "До 1000 подписчиков",
                  "5000 писем в месяц",
                  "Базовые шаблоны",
                  "Email поддержка"
                ],
                cta: "Начать бесплатно",
                popular: false
              },
              {
                name: "Professional",
                price: "2 990 ₽",
                period: "/месяц",
                features: [
                  "До 10 000 подписчиков",
                  "Безлимит писем",
                  "Все шаблоны",
                  "Автоматизация",
                  "A/B тестирование",
                  "Приоритетная поддержка"
                ],
                cta: "Попробовать 14 дней",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Индивидуально",
                period: "",
                features: [
                  "Безлимит подписчиков",
                  "Безлимит писем",
                  "Персональный менеджер",
                  "Кастомные интеграции",
                  "SLA 99.9%",
                  "Обучение команды"
                ],
                cta: "Связаться с нами",
                popular: false
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`hover-scale relative ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="gradient-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'gradient-purple text-white border-0' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Оставьте заявку, и мы свяжемся с вами в течение 24 часов
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">support@sendy.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Офис</p>
                    <p className="text-muted-foreground">Москва, ул. Тверская, 1</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Связаться с нами</CardTitle>
                <CardDescription>Заполните форму, и мы ответим вам</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-purple text-white border-0">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="https://cdn.poehali.dev/files/585e94bb-4452-4f55-99f5-6da6c99de09e.png" alt="SENDY" className="h-8 mb-4" />
              <p className="text-sm text-muted-foreground">
                Современная платформа для email-маркетинга
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Интеграции</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#cases" className="hover:text-primary transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 SENDY. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
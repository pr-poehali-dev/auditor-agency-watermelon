import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [revenue, setRevenue] = useState('');
  const [employees, setEmployees] = useState('');
  const [taxResult, setTaxResult] = useState<{osno?: number; usn?: number; usn15?: number} | null>(null);

  const calculateTaxes = () => {
    const rev = parseFloat(revenue) || 0;
    const emp = parseInt(employees) || 0;
    
    const osno = rev * 0.20 + emp * 45000 * 12;
    const usn = rev * 0.06;
    const usn15 = (rev - rev * 0.6) * 0.15;
    
    setTaxResult({ osno, usn, usn15 });
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                🍉
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold text-foreground">Арбуз</h1>
                <p className="text-xs text-muted-foreground">Академия развития бизнеса: Управление и защита</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'services', label: 'Услуги' },
                { id: 'calculator', label: 'Калькулятор' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'blog', label: 'Блог' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contacts', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-semibold' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="hidden md:block rounded-full">Связаться</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Академия развития бизнеса
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Управление и защита вашего бизнеса. Налоговый, бухгалтерский и управленческий учет для малого и среднего бизнеса, индивидуальных предпринимателей
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="outline" className="rounded-full">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: 'TrendingUp', label: 'Рост прибыли', value: '+45%' },
                    { icon: 'Shield', label: 'Защита от штрафов', value: '100%' },
                    { icon: 'Users', label: 'Довольных клиентов', value: '500+' },
                    { icon: 'Award', label: 'Лет на рынке', value: '15' }
                  ].map((stat, idx) => (
                    <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-all">
                      <CardContent className="p-6 text-center">
                        <Icon name={stat.icon} className="mx-auto mb-3 text-primary" size={32} />
                        <div className="text-3xl font-heading font-bold text-foreground mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">О компании</h3>
            <p className="text-lg text-muted-foreground">
              Мы помогаем бизнесу расти, предоставляя профессиональные услуги в области учета и аудита
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Target',
                title: 'Наша миссия',
                text: 'Обеспечить надежность и прозрачность финансового учета для растущего бизнеса'
              },
              {
                icon: 'Eye',
                title: 'Наше видение',
                text: 'Стать лидером в сфере аудиторских услуг для среднего бизнеса в России'
              },
              {
                icon: 'Heart',
                title: 'Наши ценности',
                text: 'Честность, профессионализм, индивидуальный подход к каждому клиенту'
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all animate-slide-up">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="font-heading">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">Наши услуги</h3>
            <p className="text-lg text-muted-foreground">
              Полный спектр услуг для эффективного управления финансами
            </p>
          </div>
          <Tabs defaultValue="tax" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="tax" className="rounded-full">Налоговый учет</TabsTrigger>
              <TabsTrigger value="accounting" className="rounded-full">Бухучет</TabsTrigger>
              <TabsTrigger value="management" className="rounded-full">Управленческий учет</TabsTrigger>
            </TabsList>
            <TabsContent value="tax">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Налоговый учет и оптимизация</CardTitle>
                  <CardDescription>Минимизируем налоговую нагрузку законными методами</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Расчет и оптимизация налогов',
                    'Подготовка налоговой отчетности',
                    'Налоговое планирование',
                    'Представительство в налоговых органах',
                    'Консультации по налоговому законодательству'
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Icon name="CheckCircle2" className="text-primary" size={20} />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="accounting">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Бухгалтерский учет</CardTitle>
                  <CardDescription>Полное ведение бухгалтерии вашего предприятия</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Ведение бухгалтерского учета',
                    'Подготовка финансовой отчетности',
                    'Учет основных средств и НМА',
                    'Расчет заработной платы',
                    'Инвентаризация и аудит'
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Icon name="CheckCircle2" className="text-primary" size={20} />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="management">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Управленческий учет</CardTitle>
                  <CardDescription>Аналитика и инструменты для принятия решений</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Постановка управленческого учета',
                    'Бюджетирование и планирование',
                    'Анализ финансовых показателей',
                    'Центры финансовой ответственности',
                    'Управленческая отчетность'
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Icon name="CheckCircle2" className="text-primary" size={20} />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">Калькулятор налогов</h3>
            <p className="text-lg text-muted-foreground">
              Рассчитайте примерную налоговую нагрузку для вашего бизнеса
            </p>
          </div>
          <Card className="max-w-2xl mx-auto border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Онлайн-калькулятор</CardTitle>
              <CardDescription>Введите данные для расчета налогов</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="revenue">Годовая выручка (руб)</Label>
                <Input
                  id="revenue"
                  type="number"
                  placeholder="50000000"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className="text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employees">Количество сотрудников</Label>
                <Input
                  id="employees"
                  type="number"
                  placeholder="10"
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button onClick={calculateTaxes} className="w-full rounded-full" size="lg">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать налоги
              </Button>
              
              {taxResult && (
                <div className="mt-8 p-6 bg-secondary/50 rounded-2xl space-y-4 animate-fade-in">
                  <h4 className="font-heading font-semibold text-xl text-foreground mb-4">Результаты расчета:</h4>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
                      <span className="text-muted-foreground">ОСНО (налог на прибыль + страховые взносы)</span>
                      <span className="text-2xl font-heading font-bold text-foreground">
                        {taxResult.osno?.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
                      <span className="text-muted-foreground">УСН 6% (доходы)</span>
                      <span className="text-2xl font-heading font-bold text-primary">
                        {taxResult.usn?.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
                      <span className="text-muted-foreground">УСН 15% (доходы минус расходы)</span>
                      <span className="text-2xl font-heading font-bold text-accent">
                        {taxResult.usn15?.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    * Расчет является приблизительным. Для точного расчета обратитесь к нашим специалистам.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">Портфолио</h3>
            <p className="text-lg text-muted-foreground">
              Успешные проекты для бизнеса разных отраслей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { industry: 'Производство', clients: 85, savings: '12%' },
              { industry: 'Ритейл', clients: 120, savings: '18%' },
              { industry: 'IT и услуги', clients: 95, savings: '15%' }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 text-3xl">
                    {idx === 0 ? '🏭' : idx === 1 ? '🛒' : '💻'}
                  </div>
                  <CardTitle className="font-heading text-xl">{item.industry}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Клиентов</span>
                    <span className="text-2xl font-heading font-bold text-primary">{item.clients}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Средняя экономия</span>
                    <span className="text-2xl font-heading font-bold text-accent">{item.savings}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">Наши клиенты</h3>
            <p className="text-lg text-muted-foreground">
              Нам доверяют ведущие компании России
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              >
                <span className="text-4xl">🏢</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">Блог</h3>
            <p className="text-lg text-muted-foreground">
              Полезные статьи о налогах, учете и бизнесе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Как выбрать систему налогообложения',
                date: '15 ноября 2024',
                category: 'Налоги'
              },
              {
                title: 'Управленческий учет: с чего начать',
                date: '10 ноября 2024',
                category: 'Учет'
              },
              {
                title: 'Изменения в налоговом законодательстве 2024',
                date: '5 ноября 2024',
                category: 'Законодательство'
              }
            ].map((post, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-2xl flex items-center justify-center text-6xl">
                  {idx === 0 ? '📊' : idx === 1 ? '📈' : '📋'}
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="font-heading text-lg">{post.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">Частые вопросы</h3>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-heading">
                Сколько стоят ваши услуги?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Стоимость зависит от объема работ и сложности учета. Для компаний с выручкой от 50 млн рублей
                стоимость обслуживания начинается от 80 000 рублей в месяц. Мы предложим индивидуальный тариф
                после анализа вашего бизнеса.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-heading">
                Как быстро вы сможете начать работу?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                После подписания договора мы начинаем работу в течение 3-5 рабочих дней. Процесс включает
                анализ текущего состояния учета, передачу документов и настройку систем.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-heading">
                Какие гарантии вы предоставляете?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы несем полную ответственность за качество услуг и компенсируем любые штрафы, возникшие
                по нашей вине. Все гарантии прописаны в договоре и застрахованы.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-heading">
                Работаете ли вы с компаниями из регионов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы работаем с клиентами по всей России. Весь документооборот ведется в электронном виде,
                консультации проводим онлайн или выезжаем к клиенту при необходимости.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-heading">
                Можно ли получить консультацию перед заключением договора?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Конечно! Первичная консультация бесплатна. Мы проанализируем ваш бизнес, ответим на вопросы
                и предложим оптимальную схему сотрудничества.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">Контакты</h3>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Офис в Москве</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123, офис 456</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">info@arbuz-audit.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Напишите нам</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Input id="message" placeholder="Интересует консультация..." />
                </div>
                <Button className="w-full rounded-full" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-xl">
                  🍉
                </div>
                <span className="text-xl font-heading font-bold">Арбуз</span>
              </div>
              <p className="text-gray-400 text-sm">
                Академия развития бизнеса: Управление и защита
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Налоговый учет</li>
                <li>Бухгалтерский учет</li>
                <li>Управленческий учет</li>
                <li>Аудит</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Блог</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
                  <Icon name="Mail" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
                  <Icon name="Phone" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
                  <Icon name="MessageCircle" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Арбуз. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import { Shield, TrendingDown, Sparkles, Camera, Smartphone, Brain, Clock, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export const Home = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const advantages = [
    {
      icon: Shield,
      title: 'Segurança Aprimorada',
      description: 'Diminui drasticamente as chances de invasões e furtos com sistemas de vigilância e controle de entrada eficientes.'
    },
    {
      icon: TrendingDown,
      title: 'Redução de Custos',
      description: 'A tecnologia e centralização do atendimento reduzem custos com terceirização em até 70%.'
    },
    {
      icon: Sparkles,
      title: 'Tecnologia Avançada',
      description: 'Utiliza tecnologia de ponta com IA, biometria facial e monitoramento em nuvem.'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      items: ['Detecção de movimento', 'Detecção de pessoa suspeita', 'Leitura de placas', 'Detecção de anomalias']
    },
    {
      icon: Camera,
      title: 'Câmeras em Alta Resolução',
      items: ['Imagens em tempo real', 'Armazenamento em nuvem', 'Acesso via app', 'Download de vídeos']
    },
    {
      icon: Smartphone,
      title: 'App do Morador',
      items: ['Liberação de visitantes', 'Biometria facial', 'Botão de pânico', 'Notificações em tempo real']
    },
    {
      icon: Lock,
      title: 'Controle de Acesso',
      items: ['Biometria facial', 'Registro em nuvem', 'Entrada assistida', 'Histórico completo']
    }
  ];

  const differentials = [
    'Equipe de Supervisão 24 horas',
    'Monitoramento 24h da Infraestrutura',
    'Solução Totalmente em Nuvem',
    'Banco de No-Breaks Incluso',
    'Monitoramento do Perímetro',
    'Manutenção Corretiva e Preventiva',
    'Site de Contingência'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-lg p-1">
                <img 
                  src="https://customer-assets.emergentagent.com/job_secure-entry-40/artifacts/ub29ebpw_1.png" 
                  alt="Securesys Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">Securesys</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#vantagens" className="text-gray-600 hover:text-cyan-500 transition-colors">Vantagens</a>
              <a href="#economia" className="text-gray-600 hover:text-cyan-500 transition-colors">Economia</a>
              <a href="#tecnologia" className="text-gray-600 hover:text-cyan-500 transition-colors">Tecnologia</a>
              <Button onClick={scrollToContact} className="bg-cyan-500 hover:bg-cyan-600 text-white">Solicitar Proposta</Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-cyan-50 text-cyan-600 rounded-full text-sm font-medium">
                Portaria Remota com Tecnologia de Ponta
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Segurança Inteligente<br />
              <span className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">
                para Seu Condomínio
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reduza custos em até 70% e aumente a segurança com nossa solução de portaria remota 24 horas, monitoramento inteligente e tecnologia de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button onClick={scrollToContact} size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">
                Solicitar Proposta Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-cyan-500 px-8 py-6 text-lg">
                Conhecer Tecnologias
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="vantagens" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Por Que Portaria Remota?</h2>
            <p className="text-xl text-gray-600">Transforme a segurança do seu condomínio com tecnologia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-cyan-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Economy Section */}
      <section id="economia" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Economia Real e Comprovada</h2>
            <p className="text-xl text-gray-600">Reduza até 70% dos custos com portaria terceirizada</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <p className="text-sm text-gray-500 mb-2">Portaria Terceirizada 24h</p>
                <p className="text-4xl font-bold text-gray-400 line-through">R$ 21.000</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl border-2 border-cyan-500">
                <p className="text-sm text-cyan-700 mb-2">Portaria Remota Securesys 24h</p>
                <p className="text-5xl font-bold text-cyan-600">R$ 6.300</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-900">Economia em 1 ano</span>
                  <TrendingDown className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-3xl font-bold text-green-600">R$ 176.400</p>
              </div>
              <div className="bg-white border-2 border-cyan-500 p-8 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-900">Economia em 3 anos</span>
                  <TrendingDown className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-4xl font-bold text-green-600">R$ 529.200</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tecnologia de Ponta</h2>
            <p className="text-xl text-gray-600">Recursos avançados para máxima segurança e comodidade</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <ul className="space-y-2">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h2>
            <p className="text-xl text-gray-600">O que nos torna únicos no mercado</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-cyan-50 transition-colors duration-300">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-900 font-medium">{differential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-xl px-6 border-0 shadow-md">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-cyan-600">
                Como funciona a portaria remota?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Nossa Central de Controle Operacional monitora seu condomínio 24 horas através de câmeras e sistemas integrados. Identificamos visitantes, controlamos acessos e gerenciamos ocorrências em tempo real.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white rounded-xl px-6 border-0 shadow-md">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-cyan-600">
                A economia de 70% é real?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Sim! Uma portaria terceirizada tradicional custa cerca de R$ 21.000/mês, enquanto nossa solução completa sai por R$ 6.300/mês, gerando uma economia de R$ 176.400 no primeiro ano.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white rounded-xl px-6 border-0 shadow-md">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-cyan-600">
                O que acontece em caso de queda de energia?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Fornecemos um banco de no-breaks incluso no serviço, garantindo o funcionamento contínuo de todos os sistemas mesmo durante quedas de energia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white rounded-xl px-6 border-0 shadow-md">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-cyan-600">
                Os moradores precisam instalar algum aplicativo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Sim, oferecemos um app intuitivo onde moradores podem liberar visitantes, visualizar câmeras, acionar botões de pânico e receber notificações em tempo real.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-cyan-500 to-cyan-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Modernizar Sua Segurança?
          </h2>
          <p className="text-xl text-cyan-50 mb-12 leading-relaxed">
            Entre em contato e solicite uma proposta personalizada. Nossa equipe está pronta para atender você.
          </p>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Elio Soares</h3>
                <p className="text-cyan-600 font-medium">Gerente Comercial</p>
              </div>
              <div className="space-y-4">
                <a href="tel:11959875498" className="block">
                  <Button size="lg" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white text-lg py-6">
                    (11) 95987-5498
                  </Button>
                </a>
                <a href="mailto:elio.soares@securesys.com.br" className="block">
                  <Button size="lg" variant="outline" className="w-full border-2 border-gray-300 hover:border-cyan-500 text-lg py-6">
                    elio.soares@securesys.com.br
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gray-800 rounded-lg p-1">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_secure-entry-40/artifacts/ub29ebpw_1.png" 
                    alt="Securesys Logo" 
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <span className="text-xl font-bold">Securesys</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Especialista em segurança eletrônica e controle de acesso com tecnologia de ponta.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Soluções</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Portaria Remota</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Controle de Acesso</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Monitoramento 24h</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Biometria Facial</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Elio Soares</li>
                <li>Gerente Comercial</li>
                <li className="hover:text-cyan-400 transition-colors">(11) 95987-5498</li>
                <li className="hover:text-cyan-400 transition-colors break-all">elio.soares@securesys.com.br</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Securesys. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
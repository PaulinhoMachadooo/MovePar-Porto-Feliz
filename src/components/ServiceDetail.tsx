import React, { useEffect, useState } from "react";
import { Check, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // GSAP Animations

    // Scroll animations
    gsap.utils.toArray(".gsap-fade-up").forEach((element) => {
      gsap.fromTo(
        element,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // Stagger animations
    gsap.utils.toArray(".gsap-stagger").forEach((container) => {
      const items = container.querySelectorAll(".gsap-stagger-item");
      gsap.fromTo(
        items,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const services = {
    cozinhas: {
      title: "Cozinhas Planejadas",
      subtitle: "Transforme sua cozinha em um espaço funcional e elegante",
      description:
        "Criamos cozinhas planejadas que combinam funcionalidade, estilo e aproveitamento inteligente do espaço. Cada projeto é desenvolvido pensando nas necessidades específicas da sua família.",
      heroImage:
        "https://lh3.googleusercontent.com/pw/AP1GczMG1xU17WMzeQ8YAFRkaN2M8bR2EiAKAhPcVCLogMw77GZh0MLN4JfEcRBKuV7n_eisrzCkiSJP4sM4pT0u16mHWBH_mwIUAMsAYohNEn22nj8P-j0rF-S9zlfqQstA9kzmAo_gsVz2DjylHSJHPlRI=w1093-h729-s-no-gm?authuser=1",
      features: [
        "Design personalizado para seu espaço",
        "Materiais de alta qualidade e durabilidade",
        "Aproveitamento máximo do espaço disponível",
        "Eletrodomésticos integrados",
        "Iluminação LED embutida",
        "Gavetas com fechamento suave",
        "Bancadas em quartzo ou granito",
        "Projeto 3D detalhado",
      ],
      process: [
        {
          step: "1",
          title: "Consulta Inicial",
          description:
            "Visitamos sua casa para entender suas necessidades e medir o espaço.",
        },
        {
          step: "2",
          title: "Projeto 3D",
          description:
            "Criamos um projeto detalhado em 3D para você visualizar o resultado final.",
        },
        {
          step: "3",
          title: "Aprovação",
          description:
            "Apresentamos o projeto e fazemos os ajustes necessários até sua aprovação.",
        },
        {
          step: "4",
          title: "Produção",
          description:
            "Iniciamos a produção dos móveis em nossa fábrica com materiais premium.",
        },
        {
          step: "5",
          title: "Instalação",
          description:
            "Nossa equipe especializada instala tudo com precisão e cuidado.",
        },
      ],
      gallery: [
        "https://lh3.googleusercontent.com/pw/AP1GczPOIlcxyw_4pD7NHaFj4L8KcvJDG5OWJOWhWPDjj_rzcLBc6908bMwVlKkhCn1P3sBAyMGxvxVc4XsyL7SMd1SFGJY6iiFW5ZfOIZwvqT_d5AN19ImS0pBs3xHoMaNyIigecmxyVxwb1vIQjSAIYFFG=w1093-h729-s-no-gm?authuser=1",
        "https://lh3.googleusercontent.com/pw/AP1GczNsnpOBbCywKHcEUO6l8hlfbe-m-zyVrpwi-nYkKGLNdFcfB8rSXBKAPCHKmbvWwLaUrEu42zKK-qxzML_CpBjMk4HTMxwdflYUSFIbC7vCwjsMSVONvdp5wKy1xasU6udLSKGV213MKwdCPF7L52rY=w1093-h729-s-no-gm?authuser=1",
        "https://lh3.googleusercontent.com/pw/AP1GczNjzGSLeEt78qwr96L0J4cBt-AtG6YyKlnDMalhhiYY2vMmoeCemq0veKl4qdWsart7chit9vhp70OJLLlOoMN8JjNAeYE8PU3yR-mqT7rv28jkJxlk525SO9As9UvMtxKCL8BRnGXRSr2JFuZUOk2Y=w1093-h729-s-no-gm?authuser=1",
        "https://lh3.googleusercontent.com/pw/AP1GczN8uw5QoKeqKFfPxEY_kAI0M6achxB559ztAVkmQyQFRC7SCA4VPpbqGuFbz6ZtJ7rkxPl6KCARwRlG4S2d6y7zsjlljAL9bEPZBAIlufAMdBYOeD1MfQbII1KoFJZx4zC-rZ7WOdjuwjG0E1tIMvDS=w1093-h729-s-no-gm?authuser=1",
      ],
      testimonial: {
        text: "A cozinha ficou incrível! Superou todas as nossas expectativas. O aproveitamento do espaço foi perfeito.",
        author: "Maria Silva",
        rating: 5,
      },
    },
    closets: {
      title: "Closets e Dormitórios",
      subtitle: "Organize seu guarda-roupa com estilo e funcionalidade",
      description:
        "Desenvolvemos closets e dormitórios planejados que maximizam o armazenamento e criam ambientes organizados e elegantes para seu descanso.",
      heroImage:
        "https://lh3.googleusercontent.com/pw/AP1GczOqYOP9eyKxJMBX77OOhLly-6rxQ79rBgu8y8IsCufvB6WFlmqSHNocbfWixxMXecSZWIX1damRscc5CFWY7_FMToy2LCqMlM9nDSuGsOCVigSpCsH67B530bM3XlCfSoMHj84vXd7ATbp3arUpPhJK=w1093-h716-s-no-gm?authuser=1",
      features: [
        "Closets sob medida para qualquer espaço",
        "Sistemas de organização inteligentes",
        "Iluminação LED automática",
        "Gavetas com divisórias personalizadas",
        "Cabideiros em diferentes alturas",
        "Sapateiras giratórias",
        "Espelhos integrados",
        "Acabamentos premium",
      ],
      process: [
        {
          step: "1",
          title: "Análise do Espaço",
          description:
            "Avaliamos o ambiente e suas necessidades de armazenamento.",
        },
        {
          step: "2",
          title: "Design Personalizado",
          description:
            "Criamos um layout otimizado para suas roupas e acessórios.",
        },
        {
          step: "3",
          title: "Seleção de Materiais",
          description:
            "Escolhemos os melhores materiais e acabamentos para seu projeto.",
        },
        {
          step: "4",
          title: "Fabricação",
          description: "Produzimos cada peça com precisão em nossa fábrica.",
        },
        {
          step: "5",
          title: "Montagem Final",
          description:
            "Instalamos e organizamos tudo para você começar a usar.",
        },
      ],
      gallery: [
        "https://lh3.googleusercontent.com/pw/AP1GczNe6IhUlO3V14Vpsl9u73Z9omMnxnivWIUnReAOgi8LFh1pvEort3oTXZCl2wPN-qZ-EKWkLXObmYM4hOQ3ekkdH7-LHMD2cfv9rpTg2qszmtx1iG0XbhAMX6mgubld-FtZm8xNRFcC1ntDVQOG9mjR=w1093-h729-s-no-gm?authuser=1",
        "https://lh3.googleusercontent.com/pw/AP1GczPn6FVSjwlP_aW6V8T8nq0SuUV3iS-H7igSIoYWNJqXtPkERVRFC1aTfMcRlMR2FUmFsjhnU-yB0s61vjm7vIEQO2TqsIlkdqdJ_dLpgxODClW7LFcTgQj55uZA_q-Z0BR-8XEZPmAfoCB6iuazjusa=w1093-h615-s-no-gm?authuser=1",
        "https://lh3.googleusercontent.com/pw/AP1GczPKMYOygu7940IyBlXl3BjroDnrj3CTmxWe0FGHrzVscl0AkqssDgLWtbwPRd___0FnMKDZTZTvYZGja-NunPm_YP7ILAT3BZMa1FtEhrvvyR9GFJwZb25DSzSEjqsr6ixtbizKsaUqp5pJItOyGIVX=w1093-h615-s-no-gm?authuser=1",
        "https://lh3.googleusercontent.com/pw/AP1GczPnGBVplSeJRo1VjQXtnw6yAoO5h5Hd-KHyUKbIiyY30HRndGl1dmjzqlEwsRoY5a8KizofKa189PwSldcJQQ-KKPC8qNkfsAZr86Wzv9gdGCx9GNzsPWu1Dhn-YtT9Wy105qgT4cWI6Zf1JlN4JTt0=w1093-h729-s-no-gm?authuser=1",
      ],
      testimonial: {
        text: "Meu closet ficou um sonho! Cada detalhe foi pensado para otimizar o espaço. Recomendo!",
        author: "Ana Costa",
        rating: 5,
      },
    },
    "home-office": {
      title: "Comercial",
      subtitle:
        "Criamos seu espaço de trabalho ideal para produtividade e conforto.",
      description:
        "Projetamos espaços funcionais e inspiradores que aumentam sua produtividade e bem-estar durante o trabalho .",
      heroImage:
        "https://lh3.googleusercontent.com/pw/AP1GczO-50DeR7nvwtfZCcIEoGLF4q4HX8Uy1LyUuUvdBO9rX1sGng596vBj-wHgRKOAi0tcISXcxfFH0bNKQ9HWata5e0kkm8xoNC0IHEXGZnvrl3ilIdXtsvYRsHUgQacdtzIFRNzB630vSWqthrNc0avl=w1093-h729-s-no-gm?authuser=1",
      features: [
        "Mesa ergonômica personalizada",
        "Estantes e nichos para organização",
        "Painel para TV e videoconferências",
        "Iluminação adequada para trabalho",
        "Gavetas com fechaduras",
        "Passagem de cabos integrada",
        "Suporte para equipamentos",
        "Design que inspira produtividade",
      ],
      process: [
        {
          step: "1",
          title: "Briefing Detalhado",
          description:
            "Entendemos sua rotina de trabalho e necessidades específicas.",
        },
        {
          step: "2",
          title: "Layout Ergonômico",
          description:
            "Criamos um layout que prioriza conforto e produtividade.",
        },
        {
          step: "3",
          title: "Projeto Técnico",
          description:
            "Desenvolvemos o projeto com todas as especificações técnicas.",
        },
        {
          step: "4",
          title: "Execução",
          description:
            "Fabricamos e preparamos todos os componentes do seu office.",
        },
        {
          step: "5",
          title: "Setup Completo",
          description:
            "Instalamos e configuramos tudo para você começar a trabalhar.",
        },
      ],
      gallery: [
        "https://lh3.googleusercontent.com/pw/AP1GczNaLeZLaviyFEbrXALRTlN2EpJjXGblrbj8BcKoS4kkROzUPJtI7erER6ZQDP2VHuZTVYNWx3d37qHU0n6ZJN81D3ilEsZQxVkKHJ6WdMK7Nkgkza_XROPbUFYSApBBL3isD4c6BuysT0JTCP5CiPBd=w1093-h729-s-no-gm?authuser=1",
        "https://lh3.googleusercontent.com/pw/AP1GczP1IU-BEhITxvWzoafYaDWCDzsEsuLoYAdsbZR0oNLA0dKw1Y4YGlXZIbRPcLb_q5TkRpNVXuGNen0IMfAsei8wbxZf1csXT6QhThIg_AowYpj2MMwEMtBWO2dWTtH1orBY9okycet72WhspvT9yllg=w1093-h729-s-no-gm?authuser=1",
        "https://lh3.googleusercontent.com/pw/AP1GczMfXM1edg3Gztb77DgkL85hPDmNrJrliTAXfG-swW5Ia_5ZxD_rFCAQwrsSndXYOOE53lfp5XVlEunzfYlboyrLWlh5UYXYzzie1p1K_wKoWbaUtmjFdki3JdquB2vG6ZYmZ5tVc597gi2iy7-gP3SZ=w1093-h729-s-no-gm?authuser=1",
      ],
      testimonial: {
        text: "Meu home office ficou perfeito! Trabalho muito melhor agora com tudo organizado.",
        author: "Carlos Santos",
        rating: 5,
      },
    },
    salas: {
      title: "Salas de Estar",
      subtitle: "Ambientes aconchegantes para momentos especiais",
      description:
        "Criamos salas de estar que combinam conforto, funcionalidade e design moderno para você receber família e amigos com estilo.",
      heroImage:
        "https://lh3.googleusercontent.com/pw/AP1GczNwiTfH5EcuVq5IvL-1cJIR24uLi0Ep_Tmvchhti_ZuaZD1GXsTBbUFMg3KnTKLOpCE6KlfueVGei8g6IYj8RB78cqw6yIVVx0CfwpE0AioPt5n6BHb6RtqnpKNZISUZULZTWhyINYfC9Ktc4xVQxBe=w1093-h729-s-no-gm?authuser=1",
      features: [
        "Estantes e nichos decorativos",
        "Painel para TV personalizado",
        "Mesa de centro sob medida",
        "Aparador com design exclusivo",
        "Iluminação ambiente integrada",
        "Espaços para objetos decorativos",
        "Acabamentos em madeira nobre",
        "Design harmonioso e acolhedor",
      ],
      process: [
        {
          step: "1",
          title: "Visita Técnica",
          description: "Conhecemos seu espaço e estilo de vida familiar.",
        },
        {
          step: "2",
          title: "Conceito de Design",
          description:
            "Desenvolvemos um conceito que reflete sua personalidade.",
        },
        {
          step: "3",
          title: "Apresentação 3D",
          description:
            "Mostramos como ficará sua sala através de renderizações realistas.",
        },
        {
          step: "4",
          title: "Produção Artesanal",
          description:
            "Cada peça é produzida com cuidado e atenção aos detalhes.",
        },
        {
          step: "5",
          title: "Ambientação",
          description:
            "Entregamos sua sala pronta para receber família e amigos.",
        },
      ],
      gallery: [
        "https://lh3.googleusercontent.com/pw/AP1GczOafSwJgQPGRWomNj_Uf2n8cSzFwLqoMMZSuG1N2nYOcYsz0lDRF89INlhd6HhtGCTL7QqBBXMguiDPuBa0_SwBqvqeUhhc5lbiUeiVVbmN_-110JfgySy9-ie64t8XB1G3Kqo05_6uIe-_9ztcMoy7=w1093-h729-s-no-gm?authuser=1",
      ],
      testimonial: {
        text: "Nossa sala ficou linda! O painel da TV e as estantes ficaram perfeitos.",
        author: "Roberto Lima",
        rating: 5,
      },
    },
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Serviço não encontrado
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`service-nav fixed top-0 w-full transition-all duration-300 `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/*<div className="flex items-center">
              <h1
                className={`text-xl font-bold transition-colors duration-300 ${
                  scrollY > 50 ? "text-gray-900" : "text-white"
                }`}
              >
                Móveis<span className="text-amber-600">Plus</span>
              </h1>
            </div>

            {/*<div className="flex items-center gap-4">
              <a
                href="tel:(11)99999-9999"
                className={`transition-colors duration-300 hover:text-amber-600 ${
                  scrollY > 50 ? "text-gray-700" : "text-white"
                }`}
              >
                <Phone size={20} />
              </a>
              <a
                href="mailto:contato@moveisplus.com.br"
                className={`transition-colors duration-300 hover:text-amber-600 ${
                  scrollY > 50 ? "text-gray-700" : "text-white"
                }`}
              >
                <Mail size={20} />
              </a>
            </div>*/}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="service-image absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="service-hero-content relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90">
            {service.subtitle}
          </p>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-80">
            {service.description}
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            <a
              href="https://wa.me/5543996824645"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento
            </a>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 gsap-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que está incluído
            </h2>
            <p className="text-xl text-gray-600">
              Todos os detalhes que fazem a diferença no seu projeto
            </p>
          </div>

          <div className="gsap-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="gsap-stagger-item bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 gsap-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo
            </h2>
            <p className="text-xl text-gray-600">
              Do primeiro contato até a entrega final
            </p>
          </div>

          <div className="gsap-stagger space-y-8">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="gsap-stagger-item flex flex-col lg:flex-row items-center gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 gsap-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Galeria de Projetos
            </h2>
            <p className="text-xl text-gray-600">
              Veja alguns dos nossos trabalhos realizados
            </p>
          </div>

          <div className="gsap-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.gallery.map((image, index) => (
              <div
                key={index}
                className="gsap-stagger-item group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Projeto ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gsap-fade-up">
            <div className="flex justify-center mb-6">
              {[...Array(service.testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-amber-400 fill-current"
                />
              ))}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-light text-gray-700 mb-8 italic leading-relaxed">
              "{service.testimonial.text}"
            </blockquote>
            <cite className="text-xl font-semibold text-gray-900">
              — {service.testimonial.author}
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gsap-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e transforme sua casa com móveis
              planejados de qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <a
                  href="https://wa.me/5543996824645"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento Gratuito
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

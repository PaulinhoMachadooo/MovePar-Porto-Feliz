import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ArrowRight,
  Users,
  Award,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Factory,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import ServiceDetail from "./components/ServiceDetail";
import { Router, useRouter } from "./components/Router";
import ProjectGallery from "./components/ProjectGallery";
import logo from "../src/images/logo.png";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  const { currentRoute, navigate, params } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    category: "",
    title: "",
  });

  const handleServiceClick = (serviceId: string) => {
    navigate(`/servico/${serviceId}`);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const openGallery = (category: string, title: string) => {
    setSelectedProject({ category, title });
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    if (currentRoute !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    gsap.utils.toArray(".gsap-fade-up").forEach((element) => {
      gsap.fromTo(
        element,
        { y: 100, opacity: 0 },
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

    gsap.utils.toArray(".gsap-stagger").forEach((container) => {
      const items = (container as Element).querySelectorAll(".gsap-stagger-item");
      gsap.fromTo(
        items,
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    gsap.to(".hero-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.utils.toArray(".hover-card").forEach((card) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(card, {
        y: -10,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        duration: 0.3,
        ease: "power2.out",
      });
      (card as Element).addEventListener("mouseenter", () => tl.play());
      (card as Element).addEventListener("mouseleave", () => tl.reverse());
    });

    gsap.to(".typing-text", {
      duration: 2,
      text: "Transformam Ambientes",
      ease: "none",
      delay: 1.5,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (currentRoute.startsWith("/servico/")) {
    const serviceId = params.serviceId;
    if (serviceId) {
      return <ServiceDetail serviceId={serviceId} onBack={handleBackToHome} />;
    }
  }

  const services = [
    {
      id: "cozinhas",
      title: "Cozinhas Planejadas",
      description:
        "Projetos personalizados que maximizam o espaço e funcionalidade da sua cozinha.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMKUjrjbD9BdjKqgYsWEOOL74ImoBe45b4_2mT3XCAdY-lYigSdVnMO5h5J5DDRyNqqPrlvtWtjpazCIGCq8cbNwVbVbnzj16kgJ3JSYH5ZFR-3mxr7jeN_qN34BdHy-43x1ITtJD1osviv1-51m1sP=w1093-h615-s-no-gm?authuser=1",
    },
    {
      id: "closets",
      title: "Closets e Dormitórios",
      description:
        "Soluções inteligentes de armazenamento para organizar seu guarda-roupa.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczONKCBZ5Cc0vHlN50KIzI3OEaYtioG6AcBDevh14I4kyRGFVXRB9KBcVM-fZy2bLC2RB--l4RSIEMPpxUKvR7Wnfm30f2DcE44z6u-YB6l55TEq0PA-0we50FgRLvEs1QVho3bZIoZBu45PkkcpTMgK=w1093-h716-s-no-gm?authuser=1",
    },
    {
      id: "home-office",
      title: "Comercial",
      description:
        "Ambientes funcionais e inspiradores para trabalhar com produtividade.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczP4irfWOQnNa8JOpfjj7NJkfM6CdDES-ED8pZCdw754CDrXRZsjM-1RPbMRdzxhqX2CTYOWoe6w64amBqcXyT3va3N8a2GO1Z81ew_E1zJgMPcCvfK1_XyFWQUtsRKyO_aGbhfdclvySIyRrAt5az0W=w1093-h729-s-no-gm?authuser=1",
    },
    {
      id: "salas",
      title: "Salas de Estar",
      description:
        "Móveis que combinam conforto, estilo e aproveitamento inteligente do espaço.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNwiTfH5EcuVq5IvL-1cJIR24uLi0Ep_Tmvchhti_ZuaZD1GXsTBbUFMg3KnTKLOpCE6KlfueVGei8g6IYj8RB78cqw6yIVVx0CfwpE0AioPt5n6BHb6RtqnpKNZISUZULZTWhyINYfC9Ktc4xVQxBe=w1093-h729-s-no-gm?authuser=1",
    },
  ];

  const projects = [
    {
      title: "Cozinha Moderna Integrada",
      category: "Cozinha",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMKUjrjbD9BdjKqgYsWEOOL74ImoBe45b4_2mT3XCAdY-lYigSdVnMO5h5J5DDRyNqqPrlvtWtjpazCIGCq8cbNwVbVbnzj16kgJ3JSYH5ZFR-3mxr7jeN_qN34BdHy-43x1ITtJD1osviv1-51m1sP=w1093-h615-s-no-gm?authuser=1",
    },
    {
      title: "Closet de Casal Luxuoso",
      category: "Closet",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczONKCBZ5Cc0vHlN50KIzI3OEaYtioG6AcBDevh14I4kyRGFVXRB9KBcVM-fZy2bLC2RB--l4RSIEMPpxUKvR7Wnfm30f2DcE44z6u-YB6l55TEq0PA-0we50FgRLvEs1QVho3bZIoZBu45PkkcpTMgK=w1093-h716-s-no-gm?authuser=1",
    },
    {
      title: "Comercial Moderno e Funcional",
      category: "Escritório",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMfXM1edg3Gztb77DgkL85hPDmNrJrliTAXfG-swW5Ia_5ZxD_rFCAQwrsSndXYOOE53lfp5XVlEunzfYlboyrLWlh5UYXYzzie1p1K_wKoWbaUtmjFdki3JdquB2vG6ZYmZ5tVc597gi2iy7-gP3SZ=w1093-h729-s-no-gm?authuser=1",
    },
    {
      title: "Sala de Estar Aconchegante",
      category: "Sala",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNwiTfH5EcuVq5IvL-1cJIR24uLi0Ep_Tmvchhti_ZuaZD1GXsTBbUFMg3KnTKLOpCE6KlfueVGei8g6IYj8RB78cqw6yIVVx0CfwpE0AioPt5n6BHb6RtqnpKNZISUZULZTWhyINYfC9Ktc4xVQxBe=w1093-h729-s-no-gm?authuser=1",
    },
    {
      title: "Quarto Planejado Completo",
      category: "Dormitório",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczPn6FVSjwlP_aW6V8T8nq0SuUV3iS-H7igSIoYWNJqXtPkERVRFC1aTfMcRlMR2FUmFsjhnU-yB0s61vjm7vIEQO2TqsIlkdqdJ_dLpgxODClW7LFcTgQj55uZA_q-Z0BR-8XEZPmAfoCB6iuazjusa=w1093-h615-s-no-gm?authuser=1",
    },
    {
      title: "Banheiro de Luxo",
      category: "Banheiro",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMQifI0mJ1c3sjfCCk44XHfjw7OKizvhcxfjIWZDWWPhyCvf7MYrs0m7-Cy3y8CTgLVmKRQobXOoBplCZfvk18THvS7M8nzNIRfQs3nIjqp0INFmvo3rh-pSB5lGZVhhM5VkMYp9m2kRYHw9W_u9nGt=w1093-h729-s-no-gm?authuser=1",
    },
  ];

  return (
    <Router>
      <div>
        {/* Header - always fixed, never hides */}
        <header
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            scrollY > 50
              ? "bg-white/98 backdrop-blur-lg shadow-xl border-b border-gray-100"
              : "bg-black/20 backdrop-blur-sm"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-18 lg:h-20">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2 sm:gap-3 transition-all duration-500 hover:scale-105"
                >
                  <img src={logo} className="h-12 w-auto" alt="Movepar logo" />
                </button>
                {/* Fabricação Própria Badge */}
                <div
                  className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold transition-all duration-500 ${
                    scrollY > 50
                      ? "border-amber-300 bg-amber-50 text-amber-700"
                      : "border-amber-400/60 bg-amber-500/20 text-amber-200"
                  }`}
                >
                  <Factory size={13} />
                  <span>Fabricação Própria</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-8 xl:space-x-10">
                {[
                  { label: "Início", id: "início" },
                  { label: "Serviços", id: "serviços" },
                  { label: "Projetos", id: "projetos" },
                  { label: "Sobre", id: "sobre" },
                  { label: "Contato", id: "contato" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative font-medium text-base xl:text-lg transition-all duration-300 hover:text-amber-500 hover:scale-105 ${
                      scrollY > 50
                        ? "text-gray-700"
                        : "text-white drop-shadow-md"
                    } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                  scrollY > 50
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-white drop-shadow-lg"
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-gray-100 shadow-xl">
              <nav className="px-4 py-6 space-y-4">
                {[
                  { label: "Início", id: "início" },
                  { label: "Serviços", id: "serviços" },
                  { label: "Projetos", id: "projetos" },
                  { label: "Sobre", id: "sobre" },
                  { label: "Contato", id: "contato" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left text-amber-700 hover:text-amber-600 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-amber-50 font-medium text-lg"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex items-center gap-2 px-3 py-2 mt-2 border-t border-gray-100">
                  <Factory size={16} className="text-amber-600" />
                  <span className="text-sm font-semibold text-amber-700">Fabricação Própria</span>
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section with Parallax */}
        <section
          id="início"
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Móveis Planejados que
              <span className="block text-amber-400 typing-text">
                Transformam Ambientes
              </span>
            </h1>
            <p className="hero-subtitle text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 px-2">
              Projetos personalizados com design exclusivo e funcionalidade
              inteligente para sua casa dos sonhos.
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a
                href="https://wa.me/5543996824645"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Solicitar Orçamento
              </a>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                onClick={() => scrollToSection("projetos")}
              >
                Ver Projetos
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer">
            <ChevronDown
              size={32}
              onClick={() => scrollToSection("serviços")}
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="gsap-stagger grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="gsap-stagger-item">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600 mb-1 sm:mb-2">
                  +500
                </div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Projetos Realizados
                </div>
              </div>
              <div className="gsap-stagger-item">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600 mb-1 sm:mb-2">
                  +10
                </div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Anos de Experiência
                </div>
              </div>
              <div className="gsap-stagger-item">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600 mb-1 sm:mb-2">
                  100%
                </div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Clientes Satisfeitos
                </div>
              </div>
              <div className="gsap-stagger-item">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-600 mb-1 sm:mb-2">
                  24h
                </div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Atendimento Rápido
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="serviços" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 gsap-fade-up">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                Nossos Serviços
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Transformamos seus espaços com móveis planejados de alta
                qualidade, combinando funcionalidade e design exclusivo.
              </p>
            </div>

            <div className="gsap-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="gsap-stagger-item hover-card group cursor-pointer"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <button
                        onClick={() => handleServiceClick(service.id)}
                        className="flex items-center text-amber-600 group-hover:text-amber-700 transition-colors hover:underline"
                      >
                        <span className="text-sm font-semibold">
                          Saiba mais
                        </span>
                        <ArrowRight
                          size={16}
                          className="ml-2 transition-transform group-hover:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section id="projetos" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 gsap-fade-up">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                Projetos Realizados
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Conheça alguns dos nossos trabalhos e inspire-se para seu
                próximo projeto.
              </p>
            </div>

            <div className="gsap-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="gsap-stagger-item hover-card group cursor-pointer"
                  onClick={() => openGallery(project.category, project.title)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-4 sm:translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block bg-amber-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="gsap-fade-up">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  32 Anos Transformando
                  <span className="block text-amber-600">
                    Ambientes em Sonhos
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Somos especialistas em móveis planejados com mais de uma
                  década de experiência no mercado. Nossa missão é criar
                  ambientes únicos que reflitam a personalidade e necessidades
                  de cada cliente.
                </p>
                <div className="gsap-stagger grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="gsap-stagger-item text-center">
                    <Users className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-amber-600 mx-auto mb-1 sm:mb-2" />
                    <div className="font-semibold text-sm sm:text-base">
                      Equipe Especializada
                    </div>
                  </div>
                  <div className="gsap-stagger-item text-center">
                    <Award className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-amber-600 mx-auto mb-1 sm:mb-2" />
                    <div className="font-semibold text-sm sm:text-base">
                      Materiais Premium
                    </div>
                  </div>
                  <div className="gsap-stagger-item text-center">
                    <Clock className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-amber-600 mx-auto mb-1 sm:mb-2" />
                    <div className="font-semibold text-sm sm:text-base">
                      Entrega Pontual
                    </div>
                  </div>
                </div>
                {/* Fabricação Própria highlight */}
                <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
                  <div className="bg-amber-600 rounded-lg p-2 flex-shrink-0">
                    <Factory size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">Fabricação 100% Própria</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Controle total de qualidade desde a produção até a entrega.</div>
                  </div>
                </div>
              </div>
              <div className="gsap-fade-up order-first lg:order-last">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Nossa equipe"
                    className="rounded-xl shadow-2xl"
                  />
                  <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-6 rounded-xl shadow-lg">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-600">
                        +500
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                        Projetos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contato"
          className="flex items-center py-12 sm:py-16 lg:py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 gsap-fade-up">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                Entre em Contato
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
                Vamos começar seu projeto dos sonhos hoje mesmo.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div >
                <div className="bg-amber-50 p-6 sm:p-8 rounded-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Informações de Contato
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center">
                      <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-amber-600 mr-3 sm:mr-4 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm sm:text-base">
                          Telefone
                        </div>
                        <div className="text-gray-600 text-sm sm:text-base">
                          (43) 9682-4645
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-amber-600 mr-3 sm:mr-4 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm sm:text-base">
                          E-mail
                        </div>
                        <div className="text-gray-600 text-sm sm:text-base break-all">
                          moveparportofeliz@gmail.com
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-amber-600 mr-3 sm:mr-4 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm sm:text-base">
                          Endereço
                        </div>
                        <div className="text-gray-600 text-sm sm:text-base">
                          Avenida Getúlio Vargas, 271 - Bambu
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 sm:py-10 lg:py-12 gsap-fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="gsap-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="gsap-stagger-item">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <img src={logo} className="h-12 w-auto" alt="Movepar logo" />
                </div>
                <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  Transformando ambientes com móveis planejados de qualidade
                  superior há mais de 30 anos.
                </p>
                <div className="flex items-center gap-2 mb-4 bg-amber-600/10 border border-amber-600/30 rounded-lg px-3 py-2">
                  <Factory size={15} className="text-amber-500 flex-shrink-0" />
                  <span className="text-amber-400 text-xs font-semibold">Fabricação Própria</span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/5543996824645"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-600 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/movepar.portofeliz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/moveparportofeliz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
              <div className="gsap-stagger-item">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Serviços
                </h4>
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                  <li>
                    <button
                      onClick={() => handleServiceClick("cozinhas")}
                      className="hover:text-amber-500 transition-colors text-left"
                    >
                      Cozinhas Planejadas
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleServiceClick("closets")}
                      className="hover:text-amber-500 transition-colors text-left"
                    >
                      Closets e Dormitórios
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleServiceClick("home-office")}
                      className="hover:text-amber-500 transition-colors text-left"
                    >
                      Comercial
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleServiceClick("salas")}
                      className="hover:text-amber-500 transition-colors text-left"
                    >
                      Salas de Estar
                    </button>
                  </li>
                </ul>
              </div>
              <div className="gsap-stagger-item">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Empresa
                </h4>
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                  <li>
                    <button
                      onClick={() => scrollToSection("sobre")}
                      className="hover:text-amber-500 transition-colors text-left"
                    >
                      Sobre Nós
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("projetos")}
                      className="hover:text-amber-500 transition-colors text-left"
                    >
                      Projetos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contato")}
                      className="hover:text-amber-500 transition-colors text-left"
                    >
                      Depoimentos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contato")}
                      className="hover:text-amber-500 transition-colors text-left"
                    >
                      Contato
                    </button>
                  </li>
                </ul>
              </div>
              <div className="gsap-stagger-item">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Contato
                </h4>
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                  <li>
                    <a
                      href="https://wa.me/5543996824645"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-600 transition-colors"
                    >
                      (43) 9682-4645
                    </a>
                  </li>
                  <li className="break-all">
                    <a
                      href="mailto:moveparportofeliz@gmail.com"
                      className="hover:text-amber-600 transition-colors"
                    >
                      moveparportofeliz@gmail.com
                    </a>
                  </li>
                  <li>
                    Avenida Getúlio Vargas, 271 - Bambu
                    <br />
                    Porto Feliz - SP
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-400">
              <p className="text-sm">
                &copy; 2025 Movepar. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/5543996824645"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco pelo WhatsApp"
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
        >
          <span className="hidden group-hover:flex items-center bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-xl border border-gray-100 whitespace-nowrap transition-all duration-300">
            Fale conosco
          </span>
          <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
          </div>
        </a>

        {/* Gallery Modal */}
        <ProjectGallery
          isOpen={galleryOpen}
          onClose={closeGallery}
          category={selectedProject.category}
          projectTitle={selectedProject.title}
        />
      </div>
    </Router>
  );
}

export default App;

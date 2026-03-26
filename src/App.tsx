import { useEffect, useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  MapPin, 
  BarChart3, 
  Sprout, 
  Camera, 
  Cpu, 
  Phone, 
  Mail, 
  ArrowRight,
  CheckCircle2,
  Drone,
  Scan,
  Zap,

} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { BlogSection } from './sections/BlogSection';
import './App.css';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#pocetna', label: 'Početna' },
    { href: '#onama', label: 'O nama' },
    { href: '#flota', label: 'Flota' },
    { href: '#usluge', label: 'Usluge' },
    { href: '#blog', label: 'Blog' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#pocetna" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Dron Centar" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-orange-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Zatraži ponudu
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-white/80 hover:text-orange-500 hover:bg-white/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-4">
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Zatraži ponudu
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="pocetna" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-agriculture.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(247, 148, 29, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(247, 148, 29, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm text-orange-400 font-medium">Profesionalne dron usluge</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Precizna poljoprivreda <br />
              <span className="text-gradient">iz vazduha</span>
            </h1>
            
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Snimanje poljoprivrednih parcela profesionalnim DJI enterprise dronovima 
              i napredna obrada podataka za maksimizaciju vašeg prinosa.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-6 text-lg group"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Zatraži ponudu
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                onClick={() => document.getElementById('usluge')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saznaj više
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-white/60">hektara snimljeno</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">6</div>
                <div className="text-sm text-white/60">profesionalnih dronova</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-white/60">tačnost podataka</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/20 rounded-3xl blur-3xl" />
              <img 
                src="/drone-flight-field.jpg" 
                alt="Dron u letu"
                className="relative rounded-3xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-orange-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const features = [
    {
      icon: Camera,
      title: 'Snimanje visoke rezolucije',
      description: 'RGB i multispectralna kamera za detaljan uvid u stanje useva'
    },
    {
      icon: BarChart3,
      title: 'Analiza podataka',
      description: 'Profesionalna obrada u Pix4D i drugim softverima'
    },
    {
      icon: MapPin,
      title: 'Precizno kartiranje',
      description: 'RTK pozicioniranje sa centimetarskom tačnošću'
    },
    {
      icon: Sprout,
      title: 'Praćenje useva',
      description: 'Monitoring rasta biljaka i zdravlja plantaže'
    }
  ];

  return (
    <section id="onama" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-orange-500 font-medium">
              <Scan className="w-5 h-5" />
              <span>O NAMA</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Specijalizovani smo za <br />
              <span className="text-gradient">preciznu poljoprivredu</span>
            </h2>
            
            <p className="text-lg text-white/70 leading-relaxed">
              Dron Centar je tim stručnjaka posvećen pružanju najkvalitetnijih usluga 
              snimanja i analize poljoprivrednih parcela. Koristimo najsavremeniju 
              DJI enterprise opremu i profesionalni softver za obradu podataka.
            </p>
            
            <p className="text-lg text-white/70 leading-relaxed">
              Naša misija je da poljoprivrednicima pružimo tačne i korisne informacije 
              koje im pomažu da donesu bolje odluke, uštede resurse i povećaju prinos.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {['DJI Enterprise partner', 'Licencirani piloti', 'Brza isporuka'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group p-6 bg-dark-50 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Drone Fleet Section
function FleetSection() {
  const drones = [
    {
      name: 'DJI Mavic 3E',
      image: '/drone-mavic-3e.jpg',
      description: 'Enterprise dron sa RTK modulom za precizno kartiranje i fotogrametriju.',
      specs: ['20MP kamera', 'RTK pozicioniranje', '45 min leta', 'Centimetarska tačnost']
    },
    {
      name: 'DJI Mavic 3 Multispectral',
      image: '/drone-mavic-3-multispectral.jpg',
      description: 'Multispektralna kamera za analizu zdravlja useva i NDVI mapiranje.',
      specs: ['RGB + 5 multispektralnih senzora', 'NDVI/NDRE analiza', 'Integrisani sunlight sensor', 'Praćenje rasta useva']
    },
    {
      name: 'DJI Mavic 3T',
      image: '/drone-mavic-3t.jpg',
      description: 'Termalna kamera za detekciju toplotnih anomalija i noćno snimanje.',
      specs: ['RGB + Termalna kamera', '640x512 termalni senzor', 'Noćno snimanje', 'Detekcija toplotnih anomalija']
    },
    {
      name: 'DJI Dock 2',
      image: '/drone-dock-2.jpg',
      description: 'Autonomna dron stanica za kontinuirano monitoring bez prisustva operatera.',
      specs: ['Autonomno punjenje', 'Vremenska zaštita', 'Udaljeni nadzor', 'Planirane misije']
    },
    {
      name: 'DJI Agras T30',
      image: '/drone-agras-t30.jpg',
      description: 'Poljoprivredni dron za prskanje i rasipanje đubriva.',
      specs: ['30L rezervoar', '16 raspršivača', '8m širina prskanja', '16 hektara/sat']
    },
    {
      name: 'DJI Agras T50',
      image: '/drone-agras-t50.jpg',
      description: 'Najnovija generacija poljoprivrednog drona sa većim kapacitetom.',
      specs: ['50L rezervoar', 'Dvostruki aktivni radar', '20m širina prskanja', '21 hektara/sat']
    }
  ];

  return (
    <section id="flota" className="relative py-24 bg-gradient-to-b from-black to-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-orange-500 font-medium mb-4">
            <Drone className="w-5 h-5" />
            <span>NAŠA FLOTA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Profesionalna <span className="text-gradient">dron oprema</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Koristimo najsavremenije DJI enterprise dronove za precizno snimanje 
            i tretman poljoprivrednih parcela.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drones.map((drone, index) => (
            <Dialog key={drone.name}>
              <DialogTrigger asChild>
                <div 
                  className="group cursor-pointer bg-dark-50 rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img 
                      src={drone.image} 
                      alt={drone.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{drone.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-white/70 text-sm mb-4">{drone.description}</p>
                    <div className="flex items-center text-orange-500 text-sm font-medium">
                      <span>Saznaj više</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-dark-100 border-white/10">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">{drone.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <img 
                    src={drone.image} 
                    alt={drone.name}
                    className="w-full rounded-xl"
                  />
                  <p className="text-white/70">{drone.description}</p>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Specifikacije:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {drone.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2 text-white/70">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Camera,
      title: 'Fotogrametrija i kartiranje',
      description: 'Izrada ortofoto mapa, 3D modela i Digitalnih modela terena (DEM/DSM) sa centimetarskom tačnošću.',
      features: ['Ortofoto mape', '3D modeli', 'Topografske karte', 'Izračunavanje zapremina']
    },
    {
      icon: BarChart3,
      title: 'Multispectralna analiza',
      description: 'NDVI, NDRE i druge vegetacione indekse za procenu zdravlja useva i identifikaciju problema.',
      features: ['NDVI mapiranje', 'NDRE analiza', 'Detekcija stresa', 'Praćenje rasta']
    },
    {
      icon: Sprout,
      title: 'Precizno prskanje',
      description: 'Ciljano nanošenje pesticida, herbicida i đubriva pomoću Agras dronova.',
      features: ['Tačna doza', 'Manje troškovi', 'Ekološki prihvatljivo', 'Velike površine']
    },
    {
      icon: Cpu,
      title: 'Monitoring i izveštaji',
      description: 'Redovno praćenje stanja parcela i detaljni izveštaji za donošenje odluka.',
      features: ['Sezonsko praćenje', 'Trend analiza', 'Detaljni izveštaji', 'Preporuke']
    }
  ];

  return (
    <section id="usluge" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-orange-500 font-medium mb-4">
            <Zap className="w-5 h-5" />
            <span>USLUGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Kompletna rešenja za <span className="text-gradient">vašu plantažu</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Od snimanja do analize i tretmana - pružamo sve usluge koje su vam 
            potrebne za uspešno vođenje poljoprivrednog gazdinstva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 bg-dark-50 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <service.icon className="w-7 h-7 text-orange-500" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-3 py-1 bg-white/5 text-white/80 text-sm rounded-full border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Analysis Preview */}
        <div className="mt-16 relative rounded-3xl overflow-hidden">
          <img 
            src="/data-analysis.jpg" 
            alt="Analiza podataka"
            className="w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent flex items-center">
            <div className="p-8 lg:p-16 max-w-xl">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Napredna analiza podataka
              </h3>
              <p className="text-white/70 mb-6">
                Koristimo profesionalni softver kao što su Pix4D, Agisoft Metashape 
                i DJI Terra za obradu snimaka i izradu preciznih izveštaja.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Pix4D', 'Agisoft', 'DJI Terra', 'QGIS'].map((software) => (
                  <span 
                    key={software}
                    className="px-4 py-2 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full border border-orange-500/30"
                  >
                    {software}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="kontakt" className="relative py-24 bg-gradient-to-b from-dark-50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-orange-500 font-medium mb-4">
                <Phone className="w-5 h-5" />
                <span>KONTAKT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Započnimo <span className="text-gradient">saradnju</span>
              </h2>
              <p className="text-lg text-white/70">
                Kontaktirajte nas za besplatnu konsultaciju i ponudu prilagođenu 
                vašim potrebama.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Telefon</div>
                  <div className="text-white font-medium">+381 XX XXX XXXX</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Email</div>
                  <div className="text-white font-medium">info@droncentar.rs</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Lokacija</div>
                  <div className="text-white font-medium">Srbija</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-orange-500/10 rounded-2xl border border-orange-500/20">
              <h4 className="text-white font-semibold mb-2">Radno vreme</h4>
              <div className="space-y-1 text-white/70">
                <div className="flex justify-between">
                  <span>Ponedeljak - Petak</span>
                  <span>08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Subota</span>
                  <span>09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Nedelja</span>
                  <span>Po pozivu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-50 rounded-3xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">Pošaljite upit</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/70 mb-2">Ime i prezime</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Vaše ime"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Telefon</label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="+381..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="vas@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Vrsta usluge</label>
                <select className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:border-orange-500 focus:outline-none transition-colors">
                  <option value="">Izaberite uslugu</option>
                  <option value="fotogrametrija">Fotogrametrija i kartiranje</option>
                  <option value="multispectral">Multispectralna analiza</option>
                  <option value="prskanje">Precizno prskanje</option>
                  <option value="monitoring">Monitoring i izveštaji</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Poruka</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="Opišite vaše potrebe..."
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-4 text-lg"
              >
                Pošalji upit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img 
              src="/logo.png" 
              alt="Dron Centar" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/60 max-w-sm">
              Profesionalne dron usluge za poljoprivredu. Snimanje, analiza i 
              tretman poljoprivrednih parcela najsavremenijom opremom.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Brzi linkovi</h4>
            <ul className="space-y-2">
              {['Početna', 'O nama', 'Flota', 'Usluge', 'Blog', 'Kontakt'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/60 hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Usluge</h4>
            <ul className="space-y-2">
              {[
                'Fotogrametrija',
                'Multispectralna analiza',
                'Precizno prskanje',
                'Monitoring'
              ].map((item) => (
                <li key={item}>
                  <span className="text-white/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Dron Centar. Sva prava zadržana.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-orange-500 text-sm transition-colors">
              Politika privatnosti
            </a>
            <a href="#" className="text-white/40 hover:text-orange-500 text-sm transition-colors">
              Uslovi korišćenja
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <FleetSection />
        <ServicesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

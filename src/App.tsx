import { useState, useRef, useEffect } from "react";
import { Header } from "./components/Header";
import { LandingPage } from "./components/LandingPage";
import { LoginModal } from "./components/LoginModal";
import { Dashboard } from "./components/Dashboard";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import backgroundImage1 from 'figma:asset/cc592d42aadbd6f28347f67b9044a9648823ab1d.png';
import backgroundImage2 from 'figma:asset/a33c97b18768be54db98e8a3341bc3aa0bb48f32.png';
import logo from "./assets/logo.png"; 
export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<'dashboard' | 'landing'>('landing');
  const [showPricingSection, setShowPricingSection] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  // Refs for navigation
  const servicesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const newsRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const contactsRef = useRef<HTMLElement>(null);

  // Enhanced responsive detection with multiple breakpoints
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Enhanced header visibility with responsive thresholds
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeaderVisibility = () => {
      const scrollY = window.scrollY;
      
      // Device-specific thresholds
      const scrollThreshold = {
        mobile: 30,
        tablet: 60,
        desktop: 100
      }[screenSize];
      
      const scrollDifference = {
        mobile: 3,
        tablet: 6,
        desktop: 10
      }[screenSize];
      
      if (Math.abs(scrollY - lastScrollY) < scrollDifference) {
        ticking = false;
        return;
      }

      if (scrollY > lastScrollY && scrollY > scrollThreshold) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      lastScrollY = scrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeaderVisibility);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [screenSize]);

  // Responsive pricing section trigger
  useEffect(() => {
    if (isLoggedIn) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const scrollMultiplier = {
        mobile: 1.0,
        tablet: 1.3,
        desktop: 1.5
      }[screenSize];
      
      if (scrollY > windowHeight * scrollMultiplier) {
        setShowPricingSection(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoggedIn, screenSize]);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('landing');
    setShowPricingSection(false);
  };

  const handleDashboardClick = () => {
    setCurrentView('dashboard');
  };

  const handleLogoClick = () => {
    // Always navigate to landing page first
    setCurrentView('landing');
    
    // Then scroll to the very beginning (hero section)
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const handleHeroClick = () => {
    // Always navigate to landing page first
    setCurrentView('landing');
    
    // Then scroll to the very beginning (hero section)
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  // Enhanced responsive navigation with device-specific offsets
  const createNavigationHandler = (ref: React.RefObject<HTMLElement>) => () => {
    if (isLoggedIn) {
      setCurrentView('landing');
      setTimeout(() => {
        if (ref.current) {
          const yOffset = {
            mobile: -50,
            tablet: -70,
            desktop: -80
          }[screenSize];
          
          const element = ref.current;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else if (ref.current) {
      const yOffset = {
        mobile: -50,
        tablet: -70,
        desktop: -80
      }[screenSize];
      
      const element = ref.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  const handleServicesClick = createNavigationHandler(servicesRef);
  const handleAboutClick = createNavigationHandler(aboutRef);
  const handleNewsClick = createNavigationHandler(newsRef);
  const handleContactsClick = createNavigationHandler(contactsRef);

  // Responsive background configuration
  const backgroundConfig = {
    mobile: {
      images: [
        { src: backgroundImage1, className: "absolute top-12 right-2 w-12 h-12 opacity-15 dark:opacity-8" },
        { src: backgroundImage2, className: "absolute bottom-20 left-2 w-16 h-16 opacity-10 dark:opacity-5" },
        { src: backgroundImage1, className: "absolute top-2/3 right-4 w-8 h-8 opacity-8 dark:opacity-4" }
      ]
    },
    tablet: {
      images: [
        { src: backgroundImage1, className: "absolute top-16 left-4 w-20 h-20 opacity-20 dark:opacity-12" },
        { src: backgroundImage2, className: "absolute bottom-24 right-8 w-28 h-28 opacity-15 dark:opacity-10" },
        { src: backgroundImage1, className: "absolute top-1/2 left-1/4 w-16 h-16 opacity-12 dark:opacity-6" },
        { src: backgroundImage2, className: "absolute top-1/3 right-1/4 w-18 h-18 opacity-10 dark:opacity-5" }
      ]
    },
    desktop: {
      images: [
        { src: backgroundImage1, className: "absolute top-20 left-10 w-32 h-32 opacity-25 dark:opacity-15" },
        { src: backgroundImage2, className: "absolute bottom-40 right-20 w-40 h-40 opacity-20 dark:opacity-12" },
        { src: backgroundImage1, className: "absolute top-1/2 left-1/4 w-24 h-24 opacity-15 dark:opacity-8" },
        { src: backgroundImage2, className: "absolute top-1/3 right-1/3 w-28 h-28 opacity-12 dark:opacity-6" },
        { src: backgroundImage1, className: "absolute bottom-1/4 left-1/3 w-20 h-20 opacity-10 dark:opacity-5" }
      ]
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
          {/* Responsive Background Images */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {backgroundConfig[screenSize].images.map((image, index) => (
              <img 
                key={index}
                src={image.src}
                alt=""
                className={`${image.className} transition-all duration-500 ease-in-out`}
              />
            ))}
          </div>

          {/* Main Layout Container */}
          <div className="relative z-10 min-h-screen flex flex-col">
            {/* Header */}
            <Header 
              isVisible={headerVisible}
              onLoginClick={handleLoginClick} 
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              onDashboardClick={handleDashboardClick}
              onLogoClick={handleLogoClick}
              onServicesClick={handleServicesClick}
              onAboutClick={handleAboutClick}
              onNewsClick={handleNewsClick}
              onContactsClick={handleContactsClick}
            />
            
            {/* Main Content */}
            <main className="flex-1 w-full">
              <div className="w-full">
                {currentView === 'dashboard' && isLoggedIn ? (
                  <Dashboard />
                ) : (
                  <LandingPage 
                    servicesRef={servicesRef}
                    aboutRef={aboutRef}
                    newsRef={newsRef}
                    pricingRef={showPricingSection ? pricingRef : undefined}
                    contactsRef={contactsRef}
                    onHeroClick={handleHeroClick}
                  />
                )}
              </div>
            </main>
            
            {/* Login Modal */}
            <LoginModal 
              isOpen={isLoginModalOpen} 
              onClose={handleCloseModal} 
              onLoginSuccess={handleLoginSuccess}
            />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
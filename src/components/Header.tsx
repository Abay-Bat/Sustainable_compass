import { useState } from "react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { 
  Globe, 
  Moon, 
  Sun, 
  ChevronDown, 
  Menu, 
  X,
  Settings2,
  BarChart3,
  FileText,
  Info,
  Phone,
  User,
  Building2,
  LogOut
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "./ui/sheet";
import { Separator } from "./ui/separator";

interface HeaderProps {
  isVisible?: boolean;
  onLoginClick?: () => void;
  isLoggedIn?: boolean;
  onLogout?: () => void;
  onDashboardClick?: () => void;
  onLogoClick?: () => void;
  onServicesClick?: () => void;
  onAboutClick?: () => void;
  onNewsClick?: () => void;
  onContactsClick?: () => void;
}

export function Header({ 
  isVisible = true, 
  onLoginClick, 
  isLoggedIn, 
  onLogout,
  onDashboardClick, 
  onLogoClick,
  onServicesClick, 
  onAboutClick, 
  onNewsClick, 
  onContactsClick 
}: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languageOptions = [
    { code: "ru", label: "Русский", short: "RU" },
    { code: "en", label: "English", short: "EN" },
    { code: "kz", label: "Қазақша", short: "KZ" }
  ];

  const currentLanguage = languageOptions.find(lang => lang.code === language);

  // Mobile menu handlers that close the menu after navigation
  const handleMobileNavigation = (handler?: () => void) => {
    if (handler) {
      handler();
    }
    setIsMobileMenuOpen(false);
  };

  const handleMobileLogin = () => {
    if (onLoginClick) {
      onLoginClick();
    }
    setIsMobileMenuOpen(false);
  };

  const handleMobileLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`w-full bg-background/80 backdrop-blur-sm border-b border-border px-4 sm:px-6 py-3 sm:py-4 fixed top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Logo size="md" showText={true} onClick={onLogoClick} />
        </div>
        
        {/* Navigation - Hidden on smaller screens when logged in to save space */}
        <nav className={`hidden items-center gap-3 sm:gap-6 ${isLoggedIn ? 'lg:flex' : 'md:flex'}`}>
          {isLoggedIn && (
            <button 
              onClick={onDashboardClick}
              className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap text-sm"
            >
              {t("nav.dashboard")}
            </button>
          )}
          <button 
            onClick={onServicesClick}
            className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap text-sm"
          >
            {t("nav.services")}
          </button>
          <button 
            onClick={onNewsClick}
            className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap text-sm"
          >
            {t("nav.news")}
          </button>
          <button 
            onClick={onAboutClick}
            className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap text-sm"
          >
            {t("nav.about")}
          </button>
          <button 
            onClick={onContactsClick}
            className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap text-sm"
          >
            {t("nav.contacts")}
          </button>
        </nav>
        
        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Hamburger Menu - Show on mobile/tablet when navigation is hidden */}
          <div className={`${isLoggedIn ? 'block lg:hidden' : 'block md:hidden'}`}>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="p-1 h-8 w-8"
                  aria-label="Open menu"
                >
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 max-w-full flex flex-col">
                <SheetHeader className="text-left pb-4 flex-shrink-0">
                  <SheetTitle className="text-foreground">
                    <Logo size="md" showText={true} onClick={onLogoClick} />
                  </SheetTitle>
                  <SheetDescription className="text-muted-foreground">
                    {t("common.navigation")}
                  </SheetDescription>
                </SheetHeader>
                
                {/* Scrollable content container */}
                <div className="flex flex-col flex-1 overflow-hidden">
                  <div className="flex-1 overflow-y-auto overscroll-contain">
                    <div className="flex flex-col min-h-full">
                      {/* Navigation Links */}
                      <nav className="flex flex-col space-y-2 pb-6">
                        {isLoggedIn && (
                          <button 
                            onClick={() => handleMobileNavigation(onDashboardClick)}
                            className="flex items-center gap-3 text-left text-foreground hover:text-primary hover:bg-accent/50 transition-all py-3 px-3 rounded-lg group"
                          >
                            <BarChart3 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            <span className="font-medium">{t("nav.dashboard")}</span>
                          </button>
                        )}
                        <button 
                          onClick={() => handleMobileNavigation(onServicesClick)}
                          className="flex items-center gap-3 text-left text-foreground hover:text-primary hover:bg-accent/50 transition-all py-3 px-3 rounded-lg group"
                        >
                          <Settings2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                          <span className="font-medium">{t("nav.services")}</span>
                        </button>
                        <button 
                          onClick={() => handleMobileNavigation(onNewsClick)}
                          className="flex items-center gap-3 text-left text-foreground hover:text-primary hover:bg-accent/50 transition-all py-3 px-3 rounded-lg group"
                        >
                          <FileText className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                          <span className="font-medium">{t("nav.news")}</span>
                        </button>
                        <button 
                          onClick={() => handleMobileNavigation(onAboutClick)}
                          className="flex items-center gap-3 text-left text-foreground hover:text-primary hover:bg-accent/50 transition-all py-3 px-3 rounded-lg group"
                        >
                          <Info className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                          <span className="font-medium">{t("nav.about")}</span>
                        </button>
                        <button 
                          onClick={() => handleMobileNavigation(onContactsClick)}
                          className="flex items-center gap-3 text-left text-foreground hover:text-primary hover:bg-accent/50 transition-all py-3 px-3 rounded-lg group"
                        >
                          <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                          <span className="font-medium">{t("nav.contacts")}</span>
                        </button>
                      </nav>
                      
                      <Separator className="my-6" />
                      
                      {/* Settings Section */}
                      <div className="space-y-6 pb-6">
                        <div className="space-y-4">
                          <h3 className="font-medium text-foreground flex items-center gap-2">
                            <Settings2 className="w-4 h-4" />
                            {t("common.theme")} & {t("common.language")}
                          </h3>
                          
                          {/* Theme Toggle */}
                          <div className="space-y-3">
                            <Button 
                              variant="outline" 
                              onClick={toggleTheme}
                              className="w-full justify-start gap-3 h-12 hover:bg-accent/50 transition-all"
                            >
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                {theme === "light" ? (
                                  <Moon className="w-4 h-4 text-primary" />
                                ) : (
                                  <Sun className="w-4 h-4 text-primary" />
                                )}
                              </div>
                              <div className="flex flex-col items-start">
                                <span className="font-medium">
                                  {theme === "light" ? t("common.dark_mode") : t("common.light_mode")}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
                                </span>
                              </div>
                            </Button>
                            
                            {/* Language Selector */}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-full justify-between h-12 hover:bg-accent/50 transition-all">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                      <Globe className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                      <span className="font-medium">{currentLanguage?.label}</span>
                                      <span className="text-xs text-muted-foreground">{t("common.language")}</span>
                                    </div>
                                  </div>
                                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-full min-w-[200px]">
                                {languageOptions.map((lang) => (
                                  <DropdownMenuItem
                                    key={lang.code}
                                    onClick={() => setLanguage(lang.code as "ru" | "en" | "kz")}
                                    className={`flex items-center gap-3 ${language === lang.code ? "bg-accent" : ""}`}
                                  >
                                    <Globe className="w-4 h-4" />
                                    <span>{lang.label}</span>
                                    {language === lang.code && (
                                      <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                                    )}
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                      
                      {/* User Section - Always at bottom */}
                      <div className="flex-grow"></div>
                      <div className="pt-6 mt-6 border-t border-border">
                        {isLoggedIn ? (
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-medium">
                                АН
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-foreground truncate">Айгуль Нурданова</p>
                                <p className="text-sm text-muted-foreground truncate">demo@sc.com</p>
                                <div className="flex items-center gap-1 mt-1">
                                  <Building2 className="w-3 h-3 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">Зеленые Технологии</span>
                                </div>
                              </div>
                            </div>
                            <Button 
                              variant="outline" 
                              onClick={handleMobileLogout}
                              className="w-full justify-start gap-3 h-12 text-destructive hover:text-destructive hover:bg-destructive/5 border-destructive/20"
                            >
                              <LogOut className="w-4 h-4" />
                              <span className="font-medium">{t("auth.logout")}</span>
                            </Button>
                          </div>
                        ) : (
                          <Button 
                            onClick={handleMobileLogin}
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 gap-3"
                          >
                            <User className="w-4 h-4" />
                            <span className="font-medium">{t("auth.login")}</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Language selector - More compact for desktop */}
          <div className={`${isLoggedIn ? 'hidden lg:block' : 'hidden md:block'}`}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2 py-1 h-8">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{currentLanguage?.short}</span>
                  <ChevronDown className="w-2 h-2 sm:w-3 sm:h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languageOptions.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as "ru" | "en" | "kz")}
                    className={language === lang.code ? "bg-accent" : ""}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Dark mode toggle - More compact for desktop */}
          <div className={`${isLoggedIn ? 'hidden lg:block' : 'hidden md:block'}`}>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleTheme}
              className="p-1 sm:p-2 h-8 w-8"
            >
              {theme === "light" ? (
                <Moon className="w-3 h-3 sm:w-4 sm:h-4" />
              ) : (
                <Sun className="w-3 h-3 sm:w-4 sm:h-4" />
              )}
            </Button>
          </div>
          
          {/* Login/User section - More compact and responsive */}
          {isLoggedIn ? (
            <div className="hidden lg:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-sm hover:bg-accent px-2 py-1 h-8 max-w-[200px] sm:max-w-none">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0">
                      АН
                    </div>
                    <span className="text-foreground truncate hidden sm:inline text-xs sm:text-sm">Айгуль Нурданова</span>
                    <ChevronDown className="w-2 h-2 sm:w-3 sm:h-3 flex-shrink-0" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={onDashboardClick}>
                    <span>{t("nav.dashboard")}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout} className="text-destructive">
                    <span>{t("auth.logout")}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="hidden md:block">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1 h-8 text-xs sm:text-sm"
                onClick={onLoginClick}
              >
                {t("auth.login")}
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
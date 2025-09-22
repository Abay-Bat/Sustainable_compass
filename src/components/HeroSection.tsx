import { Button } from "./ui/button";
import { ArrowRight, Play, CheckCircle, Leaf, TreePine, Recycle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onClick?: () => void;
}

export function HeroSection({ onClick }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative bg-background pt-20 pb-32 px-6 overflow-hidden">
      {/* Background ESG elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 opacity-10">
          <Leaf className="w-24 h-24 text-emerald-500 rotate-12" />
        </div>
        <div className="absolute bottom-40 right-16 opacity-10">
          <TreePine className="w-32 h-32 text-green-600 -rotate-12" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-10">
          <Recycle className="w-20 h-20 text-teal-500 rotate-45" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div 
            className={`space-y-8 ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
            onClick={onClick}
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
                {t("hero.subtitle")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t("hero.description")}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                {t("hero.cta")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Play className="mr-2 w-4 h-4" />
                {t("hero.demo")}
              </Button>
            </div>

            {/* ESG Feature list with checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{t("hero.feature1")}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{t("hero.feature2")}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{t("hero.feature3")}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{t("hero.feature4")}</span>
              </div>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="relative hidden md:block">
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1695548111267-5141f00cbeaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGJ1c2luZXNzJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwZ3JlZW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODUxNzA2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sustainable Business Analytics Dashboard" 
                className="w-full h-auto max-w-lg mx-auto lg:mx-0 rounded-lg shadow-lg border border-emerald-200 dark:border-emerald-800"
              />
              
              {/* ESG Stats overlay */}
              <div className="absolute bottom-8 left-8 bg-white dark:bg-card rounded-lg p-4 shadow-lg border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-center gap-2 mb-1">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  <div className="text-2xl font-medium text-foreground">70+</div>
                </div>
                <div className="text-sm text-muted-foreground">{t("hero.stats_diagnostics")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
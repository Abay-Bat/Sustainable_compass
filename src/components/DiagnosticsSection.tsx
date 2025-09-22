import { forwardRef, useState, useCallback } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "./ui/carousel";
import { BarChart3, Recycle, Building2, Leaf, Globe, TrendingUp, CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const DiagnosticsSection = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(1); // Start with Smart Plastic Zone as active

  const diagnostics = [
    {
      icon: BarChart3,
      title: t("diagnostics.basic.title"),
      badge: t("diagnostics.basic.subtitle"),
      badgeVariant: "outline" as const,
      description: t("diagnostics.basic.desc"),
      features: [
        t("diagnostics.basic.features.1"),
        t("diagnostics.basic.features.2"),
        t("diagnostics.basic.features.3"),
        t("diagnostics.basic.features.4"),
        t("diagnostics.basic.features.5")
      ],
      isPopular: false,
      disabled: false
    },
    {
      icon: Recycle,
      title: t("diagnostics.smart.title"),
      badge: t("diagnostics.smart.subtitle"),
      badgeVariant: "secondary" as const,
      description: t("diagnostics.smart.desc"),
      features: [
        t("diagnostics.smart.features.1"),
        t("diagnostics.smart.features.2"),
        t("diagnostics.smart.features.3"),
        t("diagnostics.smart.features.4"),
        t("diagnostics.smart.features.5"),
        t("diagnostics.smart.features.6")
      ],
      isPopular: true,
      disabled: false
    },
    {
      icon: Building2,
      title: t("diagnostics.green.title"),
      badge: t("diagnostics.green.subtitle"),
      badgeVariant: "default" as const,
      description: t("diagnostics.green.desc"),
      features: [
        t("diagnostics.green.features.1"),
        t("diagnostics.green.features.2"),
        t("diagnostics.green.features.3"),
        t("diagnostics.green.features.4"),
        t("diagnostics.green.features.5"),
        t("diagnostics.green.features.6")
      ],
      isPopular: false,
      disabled: false
    },
    {
      icon: Leaf,
      title: t("diagnostics.carbon.title"),
      badge: t("diagnostics.carbon.subtitle"),
      badgeVariant: "destructive" as const,
      description: t("diagnostics.carbon.desc"),
      features: [
        t("diagnostics.carbon.features.1"),
        t("diagnostics.carbon.features.2"),
        t("diagnostics.carbon.features.3"),
        t("diagnostics.carbon.features.4"),
        t("diagnostics.carbon.features.5")
      ],
      isPopular: false,
      disabled: false
    },
    {
      icon: Globe,
      title: t("diagnostics.compliance.title"),
      badge: t("diagnostics.compliance.subtitle"),
      badgeVariant: "outline" as const,
      description: t("diagnostics.compliance.desc"),
      features: [
        t("diagnostics.compliance.features.1"),
        t("diagnostics.compliance.features.2"),
        t("diagnostics.compliance.features.3"),
        t("diagnostics.compliance.features.4"),
        t("diagnostics.compliance.features.5")
      ],
      isPopular: false,
      disabled: false
    },
    {
      icon: TrendingUp,
      title: t("diagnostics.transformation.title"),
      badge: t("diagnostics.transformation.subtitle"),
      badgeVariant: "secondary" as const,
      description: t("diagnostics.transformation.desc"),
      features: [
        t("diagnostics.transformation.features.1"),
        t("diagnostics.transformation.features.2"),
        t("diagnostics.transformation.features.3"),
        t("diagnostics.transformation.features.4"),
        t("diagnostics.transformation.features.5")
      ],
      isPopular: false,
      disabled: true
    }
  ];

  const handleCardClick = useCallback((index: number) => {
    if (api && !diagnostics[index].disabled) {
      api.scrollTo(index);
      setActiveIndex(index);
    }
  }, [api, diagnostics]);

  const handleApiChange = useCallback((api: CarouselApi) => {
    setApi(api);
    
    if (!api) return;

    // Set initial active index
    setActiveIndex(api.selectedScrollSnap());

    // Listen for scroll changes
    api.on('select', () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, []);

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-foreground mb-4">
            {t("diagnostics.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("diagnostics.subtitle")}
          </p>
        </div>

        {/* Carousel for all screen sizes */}
        <div className="relative">
          <Carousel
            setApi={handleApiChange}
            opts={{
              align: "center",
              loop: true,
              startIndex: 1, // Start with Smart Plastic Zone
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4 lg:-ml-6">
              {diagnostics.map((diagnostic, index) => {
                const IconComponent = diagnostic.icon;
                const isCenter = index === activeIndex;
                
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 lg:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                    <Card 
                      className={`p-6 relative transition-all duration-300 cursor-pointer ${
                        isCenter 
                          ? 'transform scale-105 shadow-xl border-2 border-primary/20 bg-primary/5' 
                          : 'opacity-60 hover:opacity-80 shadow-md hover:shadow-lg bg-card'
                      } ${diagnostic.disabled ? 'grayscale cursor-not-allowed' : ''}`}
                      onClick={() => handleCardClick(index)}
                    >
                      
                      {/* Popular badge for center card */}
                      {isCenter && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs">
                            {t("common.popular")}
                          </Badge>
                        </div>
                      )}

                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isCenter ? 'bg-primary/10' : 'bg-muted'
                        }`}>
                          <IconComponent className={`w-5 h-5 ${
                            isCenter ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <h3 className={`font-medium ${
                              isCenter ? 'text-foreground' : 'text-muted-foreground'
                            }`}>
                              {diagnostic.title}
                            </h3>
                            <Badge variant={diagnostic.badgeVariant} className="text-xs">
                              {diagnostic.badge}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className={`text-sm mb-6 ${
                        isCenter ? 'text-muted-foreground' : 'text-muted-foreground/70'
                      }`}>
                        {diagnostic.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {diagnostic.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className={`flex items-start gap-2 text-xs ${
                            isCenter ? 'text-muted-foreground' : 'text-muted-foreground/70'
                          }`}>
                            <CheckCircle className={`w-3 h-3 mt-0.5 flex-shrink-0 ${
                              isCenter ? 'text-primary' : 'text-muted-foreground/50'
                            }`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button 
                        variant={isCenter ? "default" : "outline"}
                        className={`w-full text-sm ${
                          isCenter 
                            ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        disabled={diagnostic.disabled}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle button click separately from card click
                          console.log(`Button clicked for ${diagnostic.title}`);
                        }}
                      >
                        {diagnostic.disabled ? t("diagnostics.coming_soon") : t("diagnostics.learn_more")}
                      </Button>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:left-4" />
            <CarouselNext className="right-2 lg:right-4" />
          </Carousel>
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>{t("services.footer")}</p>
          <p className="mt-2">{t("services.consultation")} • {t("services.individual")}</p>
        </div>
      </div>
    </section>
  );
});

DiagnosticsSection.displayName = "DiagnosticsSection";
import { forwardRef } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const PricingSection = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      key: "startup",
      icon: "📊",
      isPopular: false,
      color: "blue"
    },
    {
      key: "avantgard",
      icon: "👑",
      isPopular: true,
      color: "purple"
    },
    {
      key: "quantum",
      icon: "⚡",
      isPopular: false,
      color: "green"
    },
    {
      key: "enterprise",
      icon: "🚀",
      isPopular: false,
      color: "orange"
    }
  ];

  const getPlanFeatures = (planKey: string) => {
    const features = [];
    let featureIndex = 1;
    while (t(`pricing.plans.${planKey}.feature${featureIndex}`) !== `pricing.plans.${planKey}.feature${featureIndex}`) {
      features.push(t(`pricing.plans.${planKey}.feature${featureIndex}`));
      featureIndex++;
    }
    return features;
  };

  const getCardBgColor = (color: string, isPopular: boolean) => {
    if (isPopular) return "bg-purple-600 text-white";
    return "bg-card";
  };

  const getIconBgColor = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/20",
      purple: "bg-purple-100 dark:bg-purple-900/20",
      green: "bg-green-100 dark:bg-green-900/20", 
      orange: "bg-orange-100 dark:bg-orange-900/20"
    };
    return colors[color as keyof typeof colors] || "bg-muted";
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-foreground mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan, index) => {
            const features = getPlanFeatures(plan.key);
            return (
              <Card
                key={plan.key}
                className={`relative p-6 transition-all duration-300 hover:shadow-lg border ${
                  plan.isPopular 
                    ? 'transform scale-105 shadow-xl border-2 border-purple-300' 
                    : 'shadow-md border-border'
                } ${getCardBgColor(plan.color, plan.isPopular)}`}
              >
                {/* Popular badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-black text-white px-3 py-1 text-xs">
                      {t("common.popular")}
                    </Badge>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                  plan.isPopular ? 'bg-white/20' : getIconBgColor(plan.color)
                }`}>
                  <span className="text-xl">{plan.icon}</span>
                </div>

                {/* Plan name and subtitle */}
                <div className="text-center mb-4">
                  <h3 className={`font-medium mb-1 ${
                    plan.isPopular ? 'text-white' : 'text-card-foreground'
                  }`}>
                    {t(`pricing.plans.${plan.key}.name`)}
                  </h3>
                  <p className={`text-sm ${
                    plan.isPopular ? 'text-white/80' : 'text-muted-foreground'
                  }`}>
                    {t(`pricing.plans.${plan.key}.subtitle`)}
                  </p>
                  <p className={`text-xs mt-1 ${
                    plan.isPopular ? 'text-white/70' : 'text-muted-foreground'
                  }`}>
                    {t(`pricing.plans.${plan.key}.employees`)}
                  </p>
                </div>

                {/* Features dropdown */}
                <div className="mb-6">
                  <details className="group">
                    <summary className={`cursor-pointer text-sm mb-3 ${
                      plan.isPopular ? 'text-white/90' : 'text-muted-foreground'
                    } hover:${plan.isPopular ? 'text-white' : 'text-foreground'} transition-colors`}>
                      {t("pricing.details")}
                    </summary>
                    <ul className="space-y-2 mt-3">
                      {features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-start gap-2 text-xs ${
                          plan.isPopular ? 'text-white/80' : 'text-muted-foreground'
                        }`}>
                          <CheckCircle className={`w-3 h-3 mt-0.5 flex-shrink-0 ${
                            plan.isPopular ? 'text-white/80' : 'text-green-600'
                          }`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>

                {/* Button */}
                <Button 
                  className={`w-full text-sm ${
                    plan.isPopular 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'bg-background text-foreground border border-border hover:bg-muted'
                  }`}
                  variant={plan.isPopular ? "default" : "outline"}
                >
                  {plan.key === 'enterprise' ? t("common.contact") : t("common.choose_plan")}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
          <div className="text-center mb-8">
            <h3 className="text-xl font-medium text-card-foreground mb-2">
              {t("pricing.additional.title")}
            </h3>
            <p className="text-muted-foreground">
              {t("pricing.additional.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h4 className="font-medium text-card-foreground mb-2">{t("pricing.consultation.title")}</h4>
              <p className="text-sm text-muted-foreground">
                {t("pricing.consultation.desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📚</span>
              </div>
              <h4 className="font-medium text-card-foreground mb-2">{t("pricing.training.title")}</h4>
              <p className="text-sm text-muted-foreground">
                {t("pricing.training.desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔒</span>
              </div>
              <h4 className="font-medium text-card-foreground mb-2">{t("pricing.security.title")}</h4>
              <p className="text-sm text-muted-foreground">
                {t("pricing.security.desc")}
              </p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p className="mb-2">{t("pricing.trial")}</p>
          <p>{t("pricing.payment")}</p>
        </div>
      </div>
    </section>
  );
});

PricingSection.displayName = "PricingSection";
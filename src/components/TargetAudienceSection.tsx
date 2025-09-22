import { Building, Users, DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

export function TargetAudienceSection() {
  const { t } = useLanguage();
  
  const audiences = [
    {
      icon: Building,
      title: t("audience.sme.title"),
      description: t("audience.sme.desc")
    },
    {
      icon: Users,
      title: t("audience.managers.title"),
      description: t("audience.managers.desc")
    },
    {
      icon: DollarSign,
      title: t("audience.investors.title"),
      description: t("audience.investors.desc")
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-foreground mb-8">
            {t("audience.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm border border-border">
                  <IconComponent className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-medium text-foreground mb-4">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            {t("audience.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
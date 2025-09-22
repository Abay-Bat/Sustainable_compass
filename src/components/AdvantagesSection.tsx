import { forwardRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const AdvantagesSection = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useLanguage();

  const advantages = [
    {
      number: "1",
      title: t("advantages.1.title"),
      description: t("advantages.1.desc")
    },
    {
      number: "2", 
      title: t("advantages.2.title"),
      description: t("advantages.2.desc")
    },
    {
      number: "3",
      title: t("advantages.3.title"), 
      description: t("advantages.3.desc")
    },
    {
      number: "4",
      title: t("advantages.4.title"),
      description: t("advantages.4.desc")
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-foreground mb-4">
            {t("advantages.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("advantages.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <span className="font-medium text-muted-foreground">
                    {advantage.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-card-foreground mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

AdvantagesSection.displayName = "AdvantagesSection";
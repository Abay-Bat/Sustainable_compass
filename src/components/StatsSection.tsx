import { forwardRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const StatsSection = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useLanguage();

  const stats = [
    {
      number: "150+",
      label: t("stats.companies"),
      description: t("stats.companies_desc")
    },
    {
      number: "1000+",
      label: t("stats.reports"),
      description: t("stats.reports_desc")
    },
    {
      number: "70%",
      label: t("stats.savings"),
      description: t("stats.savings_desc")
    },
    {
      number: "15+",
      label: t("stats.standards"),
      description: t("stats.standards_desc")
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-medium text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = "StatsSection";
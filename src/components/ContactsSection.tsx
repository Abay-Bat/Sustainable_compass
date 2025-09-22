import { forwardRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const ContactsSection = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useLanguage();

  const problems = [
    {
      title: t("contacts.problems.1")
    },
    {
      title: t("contacts.problems.2")
    },
    {
      title: t("contacts.problems.3")
    },
    {
      title: t("contacts.problems.4")
    },
    {
      title: t("contacts.problems.5")
    },
    {
      title: t("contacts.problems.6")
    }
  ];

  const esgAspects = [
    {
      letter: "E",
      title: t("esg.environmental.title"),
      subtitle: t("esg.environmental.subtitle"),
      items: [
        t("esg.environmental.items.1"),
        t("esg.environmental.items.2"),
        t("esg.environmental.items.3"),
        t("esg.environmental.items.4"),
        t("esg.environmental.items.5")
      ]
    },
    {
      letter: "S", 
      title: t("esg.social.title"),
      subtitle: t("esg.social.subtitle"),
      items: [
        t("esg.social.items.1"),
        t("esg.social.items.2"),
        t("esg.social.items.3"),
        t("esg.social.items.4"),
        t("esg.social.items.5")
      ]
    },
    {
      letter: "G",
      title: t("esg.governance.title"), 
      subtitle: t("esg.governance.subtitle"),
      items: [
        t("esg.governance.items.1"),
        t("esg.governance.items.2"),
        t("esg.governance.items.3"),
        t("esg.governance.items.4"),
        t("esg.governance.items.5")
      ]
    }
  ];

  return (
    <section ref={ref} className="bg-gray-900 dark:bg-gray-950 text-white">
      {/* Hero Contact Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - CTA */}
            <div>
              <h2 className="text-3xl font-medium mb-6">
                {t("contacts.title")}
              </h2>
              <p className="text-gray-300 mb-8">
                {t("contacts.subtitle")}
              </p>
              <div className="flex gap-3">
                <Input 
                  placeholder={t("contacts.email_placeholder")}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 flex-1"
                />
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8">
                  {t("auth.login")}
                </Button>
              </div>
            </div>

            {/* Right side - Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">{t("contacts.info_title")}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">{t("contacts.email")}</p>
                    <p>info@sustainablecompass.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">{t("contacts.phone")}</p>
                    <p>+7 (915) 194 07 40</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">{t("contacts.address")}</p>
                    <p style={{ whiteSpace: 'pre-line' }}>{t("contacts.address_text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problems Section */}
      <div className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium mb-4">
              {t("contacts.problems_title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 p-6">
                <p className="text-white text-sm leading-relaxed">
                  {problem.title}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* ESG Explanation Section */}
      <div className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium mb-4">
              {t("contacts.esg_title")}
            </h2>
            <p className="text-gray-300">
              {t("contacts.esg_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esgAspects.map((aspect, index) => (
              <div key={index} className="text-center">
                {/* Large Letter */}
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl font-light text-white">
                    {aspect.letter}
                  </span>
                </div>

                {/* Title and Subtitle */}
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-2">{aspect.title}</h3>
                  <p className="text-gray-300 text-sm">{aspect.subtitle}</p>
                </div>

                {/* Items List */}
                <ul className="space-y-2 text-sm text-gray-400">
                  {aspect.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-gray-400 text-sm">
            <p>{t("footer.copyright")}</p>
            <p className="mt-2">
              {t("footer.links")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactsSection.displayName = "ContactsSection";
import { createContext, useContext, useState } from "react";

type Language = "ru" | "en" | "kz";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Translations with pricing plans included
const translations = {
  ru: {
    // Navigation
    "nav.services": "Услуги",
    "nav.news": "Новости", 
    "nav.about": "О компании",
    "nav.contacts": "Контакты",
    "nav.dashboard": "Панель управления",
    "auth.login": "Войти",
    "auth.logout": "Выйти",
    
    // Pricing General
    "pricing.title": "Планы IT-решений для вашего бизнеса",
    "pricing.subtitle": "Выберите подходящий план технологических решений для цифровой трансформации вашей компании и внедрения ESG стандартов",
    "pricing.details": "Посмотреть, что включает ▼",
    "pricing.additional.title": "Дополнительные преимущества наших планов",
    "pricing.additional.subtitle": "Независимо от выбранного плана, вы получаете полный спектр поддержки",
    "pricing.consultation.title": "Персональная консультация",
    "pricing.consultation.desc": "Бесплатная первичная консультация с экспертом по ESG для анализа ваших потребностей",
    "pricing.training.title": "Обучение команды",
    "pricing.training.desc": "Комплексное обучение ваших сотрудников работе с ESG системами и стандартами",
    "pricing.security.title": "Безопасность данных",
    "pricing.security.desc": "Высочайший уровень защиты корпоративных данных согласно международным стандартам",
    "pricing.trial": "Все планы включают бесплатный пробный период 14 дней",
    "pricing.payment": "Возможна оплата в рассрочку • Скидки для образовательных учреждений • Гибкие условия для стартапов",
    
    // Pricing Plans - Russian
    "pricing.plans.startup.name": "Стартап",
    "pricing.plans.startup.subtitle": "Базовые IT-решения",
    "pricing.plans.startup.employees": "до 50 сотрудников",
    "pricing.plans.startup.feature1": "Базовая ESG диагностика",
    "pricing.plans.startup.feature2": "Облачное хранение 500 ГБ",
    "pricing.plans.startup.feature3": "Техподдержка 24/7",
    "pricing.plans.startup.feature4": "Автоматические отчеты",
    "pricing.plans.startup.feature5": "API интеграция",
    
    "pricing.plans.avantgard.name": "Avantgard",
    "pricing.plans.avantgard.subtitle": "Продвинутые решения с ИИ",
    "pricing.plans.avantgard.employees": "50-500 сотрудников",
    "pricing.plans.avantgard.feature1": "ESG аналитика с ИИ",
    "pricing.plans.avantgard.feature2": "Облачное хранение 500 ГБ",
    "pricing.plans.avantgard.feature3": "Техподдержка 24/7",
    "pricing.plans.avantgard.feature4": "Автоматизированные отчеты",
    "pricing.plans.avantgard.feature5": "API интеграция",
    "pricing.plans.avantgard.feature6": "ИИ блокчейн",
    
    "pricing.plans.quantum.name": "Quantum",
    "pricing.plans.quantum.subtitle": "Интеллектуальное управление",
    "pricing.plans.quantum.employees": "500+ сотрудников",
    "pricing.plans.quantum.feature1": "Полная ESG экосистема",
    "pricing.plans.quantum.feature2": "Неограниченное хранение",
    "pricing.plans.quantum.feature3": "Приоритетная поддержка",
    "pricing.plans.quantum.feature4": "Персональный менеджер",
    "pricing.plans.quantum.feature5": "Корпоративная интеграция",
    
    "pricing.plans.enterprise.name": "Enterprise+",
    "pricing.plans.enterprise.subtitle": "Эксклюзивные решения",
    "pricing.plans.enterprise.employees": "Корпорации и госсектор",
    "pricing.plans.enterprise.feature1": "Индивидуальная разработка",
    "pricing.plans.enterprise.feature2": "Выделенная инфраструктура",
    "pricing.plans.enterprise.feature3": "Персональная команда",
    "pricing.plans.enterprise.feature4": "SLA 99.9%",
    "pricing.plans.enterprise.feature5": "Комплексная безопасность",
    
    // Common
    "common.choose_plan": "Выбрать план",
    "common.contact": "Связаться",
    "common.popular": "Популярный",
    "common.language": "Язык",
    "common.theme": "Тема",
    "common.light_mode": "Светлая тема",
    "common.dark_mode": "Темная тема",
    "common.menu": "Меню",
    "common.navigation": "Навигация"
  },
  
  en: {
    // Navigation
    "nav.services": "Services",
    "nav.news": "News",
    "nav.about": "About",
    "nav.contacts": "Contacts", 
    "nav.dashboard": "Dashboard",
    "auth.login": "Login",
    "auth.logout": "Logout",
    
    // Pricing General
    "pricing.title": "IT Solution Plans for Your Business",
    "pricing.subtitle": "Choose the right technology solution plan for your company's digital transformation and ESG standards implementation",
    "pricing.details": "See what's included ▼",
    "pricing.additional.title": "Additional Benefits of Our Plans",
    "pricing.additional.subtitle": "Regardless of the plan you choose, you get full spectrum support",
    "pricing.consultation.title": "Personal Consultation",
    "pricing.consultation.desc": "Free initial consultation with ESG expert to analyze your needs",
    "pricing.training.title": "Team Training",
    "pricing.training.desc": "Comprehensive training for your employees on ESG systems and standards",
    "pricing.security.title": "Data Security",
    "pricing.security.desc": "Highest level of corporate data protection according to international standards",
    "pricing.trial": "All plans include a free 14-day trial period",
    "pricing.payment": "Installment payment available • Discounts for educational institutions • Flexible conditions for startups",
    
    // Pricing Plans - English
    "pricing.plans.startup.name": "Startup",
    "pricing.plans.startup.subtitle": "Basic IT Solutions",
    "pricing.plans.startup.employees": "up to 50 employees",
    "pricing.plans.startup.feature1": "Basic ESG diagnostics",
    "pricing.plans.startup.feature2": "500 GB cloud storage",
    "pricing.plans.startup.feature3": "24/7 technical support",
    "pricing.plans.startup.feature4": "Automated reports",
    "pricing.plans.startup.feature5": "API integration",
    
    "pricing.plans.avantgard.name": "Avantgard",
    "pricing.plans.avantgard.subtitle": "Advanced AI Solutions",
    "pricing.plans.avantgard.employees": "50-500 employees",
    "pricing.plans.avantgard.feature1": "ESG analytics with AI",
    "pricing.plans.avantgard.feature2": "500 GB cloud storage",
    "pricing.plans.avantgard.feature3": "24/7 technical support",
    "pricing.plans.avantgard.feature4": "Automated reports",
    "pricing.plans.avantgard.feature5": "API integration",
    "pricing.plans.avantgard.feature6": "AI blockchain",
    
    "pricing.plans.quantum.name": "Quantum",
    "pricing.plans.quantum.subtitle": "Intelligent Management",
    "pricing.plans.quantum.employees": "500+ employees",
    "pricing.plans.quantum.feature1": "Full ESG ecosystem",
    "pricing.plans.quantum.feature2": "Unlimited storage",
    "pricing.plans.quantum.feature3": "Priority support",
    "pricing.plans.quantum.feature4": "Personal manager",
    "pricing.plans.quantum.feature5": "Corporate integration",
    
    "pricing.plans.enterprise.name": "Enterprise+",
    "pricing.plans.enterprise.subtitle": "Exclusive Solutions",
    "pricing.plans.enterprise.employees": "Corporations and government",
    "pricing.plans.enterprise.feature1": "Custom development",
    "pricing.plans.enterprise.feature2": "Dedicated infrastructure",
    "pricing.plans.enterprise.feature3": "Personal team",
    "pricing.plans.enterprise.feature4": "99.9% SLA",
    "pricing.plans.enterprise.feature5": "Comprehensive security",
    
    // Common
    "common.choose_plan": "Choose Plan",
    "common.contact": "Contact",
    "common.popular": "Popular",
    "common.language": "Language",
    "common.theme": "Theme",
    "common.light_mode": "Light Theme",
    "common.dark_mode": "Dark Theme",
    "common.menu": "Menu",
    "common.navigation": "Navigation"
  },
  
  kz: {
    // Navigation
    "nav.services": "Қызметтер",
    "nav.news": "Жаңалықтар",
    "nav.about": "Компания туралы",
    "nav.contacts": "Байланыстар",
    "nav.dashboard": "Басқару панелі",
    "auth.login": "Кіру",
    "auth.logout": "Шығу",
    
    // Pricing General
    "pricing.title": "Сіздің бизнесіңіз үшін IT шешімдер жоспарлары",
    "pricing.subtitle": "Компанияңыздың цифрлық трансформациясы және ESG стандарттарын енгізу үшін дұрыс технологиялық шешім жоспарын таңдаңыз",
    "pricing.details": "Не кіретінін көру ▼",
    "pricing.additional.title": "Біздің жоспарларымыздың қосымша артықшылықтары",
    "pricing.additional.subtitle": "Қай жоспарды таңдасаңыз да, толық спектрлі қолдау аласыз",
    "pricing.consultation.title": "Жеке кеңес",
    "pricing.consultation.desc": "Сіздің қажеттіліктеріңізді талдау үшін ESG сарапшысымен тегін алғашқы кеңес",
    "pricing.training.title": "Команда дайындау",
    "pricing.training.desc": "Қызметкерлеріңізді ESG жүйелері мен стандарттарымен жұмыс істеуге кешенді дайындау",
    "pricing.security.title": "Деректер қауіпсіздігі",
    "pricing.security.desc": "Халықаралық стандарттарға сәйкес корпоративтік деректерді қорғаудың ең жоғары деңгейі",
    "pricing.trial": "Барлық жоспарларға 14 күндік тегін сынақ кезеңі кіреді",
    "pricing.payment": "Бөліп төлеу мүмкін • Білім беру мекемелеріне жеңілдіктер • Стартаптар үшін икемді шарттар",
    
    // Pricing Plans - Kazakh
    "pricing.plans.startup.name": "Стартап",
    "pricing.plans.startup.subtitle": "Негізгі IT шешімдері",
    "pricing.plans.startup.employees": "50-ге дейін қызметкерлер",
    "pricing.plans.startup.feature1": "Негізгі ESG диагностикасы",
    "pricing.plans.startup.feature2": "500 ГБ бұлтты сақтау",
    "pricing.plans.startup.feature3": "24/7 техникалық қолдау",
    "pricing.plans.startup.feature4": "Автоматты есептер",
    "pricing.plans.startup.feature5": "API интеграциясы",
    
    "pricing.plans.avantgard.name": "Avantgard",
    "pricing.plans.avantgard.subtitle": "ЖИ-мен кеңейтілген шешімдер",
    "pricing.plans.avantgard.employees": "50-500 қызметкерлер",
    "pricing.plans.avantgard.feature1": "ЖИ-мен ESG аналитикасы",
    "pricing.plans.avantgard.feature2": "500 ГБ бұлтты сақтау",
    "pricing.plans.avantgard.feature3": "24/7 техникалық қолдау",
    "pricing.plans.avantgard.feature4": "Автоматталған есептер",
    "pricing.plans.avantgard.feature5": "API интеграциясы",
    "pricing.plans.avantgard.feature6": "ЖИ блокчейн",
    
    "pricing.plans.quantum.name": "Quantum",
    "pricing.plans.quantum.subtitle": "Ақылды басқару",
    "pricing.plans.quantum.employees": "500+ қызметкерлер",
    "pricing.plans.quantum.feature1": "Толық ESG экожүйесі",
    "pricing.plans.quantum.feature2": "Шексіз сақтау",
    "pricing.plans.quantum.feature3": "Басымдықты қолдау",
    "pricing.plans.quantum.feature4": "Жеке менеджер",
    "pricing.plans.quantum.feature5": "Корпоративтік интеграция",
    
    "pricing.plans.enterprise.name": "Enterprise+",
    "pricing.plans.enterprise.subtitle": "Эксклюзивті шешімдер",
    "pricing.plans.enterprise.employees": "Корпорациялар мен мемсектор",
    "pricing.plans.enterprise.feature1": "Жеке әзірлеу",
    "pricing.plans.enterprise.feature2": "Арнайы инфрақұрылым",
    "pricing.plans.enterprise.feature3": "Жеке команда",
    "pricing.plans.enterprise.feature4": "99.9% SLA",
    "pricing.plans.enterprise.feature5": "Кешенді қауіпсіздік",
    
    // Common
    "common.choose_plan": "Жоспар таңдау",
    "common.contact": "Байланысу",
    "common.popular": "Танымал",
    "common.language": "Тіл",
    "common.theme": "Тема",
    "common.light_mode": "Ашық тема",
    "common.dark_mode": "Қараңғы тема",
    "common.menu": "Мәзір",
    "common.navigation": "Навигация"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
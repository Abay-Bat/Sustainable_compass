import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { CheckCircle, X } from "lucide-react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
  const pricingPlans = [
    {
      name: "Стартап",
      icon: "📊",
      subtitle: "Базовые IT-решения",
      employees: "до 50 сотрудников",
      price: "99 000 ₽",
      period: "/месяц",
      features: [
        "Базовая ESG диагностика",
        "Облачное хранение 500 ГБ",
        "Техподдержка 24/7",
        "Автоматические отчеты",
        "API интеграция"
      ],
      isPopular: false,
      buttonText: "Выбрать план",
      color: "blue"
    },
    {
      name: "Avantgard",
      icon: "👑",
      subtitle: "Продвинутые решения с ИИ",
      employees: "50-500 сотрудников",
      price: "299 000 ₽",
      period: "/месяц",
      features: [
        "ESG аналитика с ИИ",
        "Облачное хранение 500 ГБ",
        "Техподдержка 24/7",
        "Автоматизированные отчеты",
        "API интеграция",
        "ИИ блокчейн"
      ],
      isPopular: true,
      buttonText: "Выбрать план",
      color: "purple"
    },
    {
      name: "Quantum",
      icon: "⚡",
      subtitle: "Интеллектуальное управление",
      employees: "500+ сотрудников",
      price: "599 000 ₽",
      period: "/месяц",
      features: [
        "Полная ESG экосистема",
        "Неограниченное хранение",
        "Приоритетная поддержка",
        "Персональный менеджер",
        "Корпоративная интеграция"
      ],
      isPopular: false,
      buttonText: "Выбрать план",
      color: "green"
    },
    {
      name: "Enterprise+",
      icon: "🚀",
      subtitle: "Эксклюзивные решения",
      employees: "Корпорации и госсектор",
      price: "по запросу",
      period: "",
      features: [
        "Индивидуальная разработка",
        "Выделенная инфраструктура",
        "Персональная команда",
        "SLA 99.9%",
        "Комплексная безопасность"
      ],
      isPopular: false,
      buttonText: "Связаться",
      color: "orange"
    }
  ];

  const getCardBgColor = (color: string, isPopular: boolean) => {
    if (isPopular) return "bg-purple-600 text-white";
    return "bg-white";
  };

  const getIconBgColor = (color: string) => {
    const colors = {
      blue: "bg-blue-100",
      purple: "bg-purple-100",
      green: "bg-green-100", 
      orange: "bg-orange-100"
    };
    return colors[color as keyof typeof colors] || "bg-gray-100";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center mb-8">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-medium text-gray-900 mb-2">
                Планы IT-решений для вашего бизнеса
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Выберите подходящий план технологических решений
              </DialogDescription>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="flex-shrink-0 ml-4"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative p-6 transition-all duration-300 ${
                plan.isPopular 
                  ? 'transform scale-105 shadow-xl border-2 border-purple-300' 
                  : 'shadow-md hover:shadow-lg'
              } ${getCardBgColor(plan.color, plan.isPopular)}`}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-black text-white px-3 py-1 text-xs">
                    Популярный
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
                  plan.isPopular ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${
                  plan.isPopular ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {plan.subtitle}
                </p>
                <p className={`text-xs mt-1 ${
                  plan.isPopular ? 'text-white/70' : 'text-gray-500'
                }`}>
                  {plan.employees}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className={`text-xl font-medium ${
                  plan.isPopular ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.price}
                  {plan.period && (
                    <span className={`text-sm font-normal ${
                      plan.isPopular ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features dropdown */}
              <div className="mb-6">
                <details className="group">
                  <summary className={`cursor-pointer text-sm mb-3 ${
                    plan.isPopular ? 'text-white/90' : 'text-gray-600'
                  } hover:${plan.isPopular ? 'text-white' : 'text-gray-900'} transition-colors`}>
                    Посмотреть, что включает ▼
                  </summary>
                  <ul className="space-y-2 mt-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-start gap-2 text-xs ${
                        plan.isPopular ? 'text-white/80' : 'text-gray-600'
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
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
                variant={plan.isPopular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Все планы включают бесплатный пробный период 14 дней</p>
          <p className="mt-1">Возможна оплата в рассрочку • Скидки для образовательных учреждений</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
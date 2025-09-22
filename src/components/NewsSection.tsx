import { forwardRef } from "react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const NewsSection = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useLanguage();
  
  const newsItems = [
    {
      id: 1,
      title: t("news.article1.title"),
      description: t("news.article1.description"),
      image: "https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NTgzOTg4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: t("news.article1.readTime"),
      category: t("news.blog"),
      isNew: true
    },
    {
      id: 2,
      title: t("news.article2.title"),
      description: t("news.article2.description"),
      image: "https://images.unsplash.com/photo-1653378972336-103e1ea62721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFU0clMjBpbnZlc3RtZW50JTIwZ3JlZW4lMjBmaW5hbmNlfGVufDF8fHx8MTc1ODQ1MzM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: t("news.article2.readTime"),
      category: t("news.blog"),
      isNew: false
    },
    {
      id: 3,
      title: t("news.article3.title"),
      description: t("news.article3.description"),
      image: "https://images.unsplash.com/photo-1728225956024-6d62825a2c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGJ1c2luZXNzJTIwZ3JlZW4lMjBvZmZpY2V8ZW58MXx8fHwxNzU4NDUzMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: t("news.article3.readTime"),
      category: t("news.blog"),
      isNew: false
    },
    {
      id: 4,
      title: t("news.article4.title"),
      description: t("news.article4.description"),
      image: "https://images.unsplash.com/photo-1728225956024-6d62825a2c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzdXN0YWluYWJpbGl0eSUyMHJlcG9ydGluZ3xlbnwxfHx8fDE3NTg0NTMzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: t("news.article4.readTime"),
      category: t("news.blog"),
      isNew: false
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t("news.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              {t("news.subtitle")}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {t("news.badge")}
            </Badge>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured article */}
          <Card className="lg:row-span-2 overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow border border-border bg-card">
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <img 
                src={newsItems[0].image} 
                alt={newsItems[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <Badge variant="default" className="text-xs">
                  {newsItems[0].category}
                </Badge>
                {newsItems[0].isNew && (
                  <Badge variant="destructive" className="text-xs">
                    {t("news.new")}
                  </Badge>
                )}
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-xs">
                <Clock className="w-3 h-3" />
                <span>{newsItems[0].readTime} {t("news.read_time")}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-medium text-card-foreground mb-3 group-hover:text-muted-foreground transition-colors">
                {newsItems[0].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {newsItems[0].description}
              </p>
            </div>
          </Card>

          {/* Other articles */}
          <div className="space-y-6">
            {newsItems.slice(1).map((article) => (
              <Card key={article.id} className="overflow-hidden group cursor-pointer hover:shadow-md transition-shadow border border-border bg-card">
                <div className="flex">
                  <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground text-xs">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime} {t("news.read_time")}</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-card-foreground text-sm mb-2 line-clamp-2 group-hover:text-muted-foreground transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {article.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border hover:border-muted-foreground">
            {t("news.view_all")}
          </button>
        </div>
      </div>
    </section>
  );
});

NewsSection.displayName = "NewsSection";
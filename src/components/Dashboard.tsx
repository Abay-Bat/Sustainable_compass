import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Bell, MessageSquare, FileText, Settings, User, Calendar, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import exampleImage from 'figma:asset/5fe79e8a043e8ef604fa981b4be3433cfaf4b917.png';

export function Dashboard() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-medium text-foreground mb-1 relative z-10">
                {t("dashboard.welcome")}
              </h1>
              <p className="text-muted-foreground text-sm relative z-10">
                {t("dashboard.companyAnalysis")}
              </p>
            </div>
            <div className="text-right text-sm text-muted-foreground relative z-10">
              September 11 16:41<br />
              December 13 14:13
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-medium text-sm">1</span>
              </div>
              <span className="text-sm text-muted-foreground">{t("dashboard.registration")}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-medium text-sm">2</span>
              </div>
              <span className="text-sm text-muted-foreground">{t("dashboard.completion")}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-medium text-sm">63%</span>
              </div>
              <span className="text-sm text-muted-foreground">{t("dashboard.progressAnalysis")}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-medium text-sm">3</span>
              </div>
              <span className="text-sm text-muted-foreground">{t("dashboard.clientReport")}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - ESG Analysis */}
          <div className="lg:col-span-2 space-y-6">
            {/* ESG Overview */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 bg-muted rounded-full"></div>
                <h2 className="font-medium text-card-foreground">{t("dashboard.esgDiagnosticsBase")}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t("dashboard.esgAssessment")}
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-card-foreground">{t("dashboard.esgCompanyAnalysis")}</span>
                    <Badge className="bg-blue-100 text-blue-800 text-xs">{t("dashboard.new")}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {t("dashboard.comprehensiveAnalysis")}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">{t("dashboard.completed")}</span>
                      <span className="text-muted-foreground">82%</span>
                    </div>
                    <Progress value={82} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{t("dashboard.daysAgo")}</span>
                      <span>{t("dashboard.monthsRemaining")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Smart Plastic Zone */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-muted rounded-full"></div>
                  <h3 className="font-medium text-card-foreground">{t("dashboard.smartPlasticZone")}</h3>
                </div>
                <Badge className="bg-green-100 text-green-800 text-xs">{t("dashboard.completedStatus")}</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                {t("dashboard.environmentalSafety")}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{t("dashboard.completed34")}</span>
                  <span className="text-muted-foreground">100%</span>
                </div>
                <Progress value={100} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{t("dashboard.dayAgo")}</span>
                  <span>{t("dashboard.endMarch")}</span>
                </div>
              </div>
            </Card>

            {/* Green Building Assessment */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-muted rounded-full"></div>
                  <h3 className="font-medium text-card-foreground">{t("dashboard.greenBuildingAssessment")}</h3>
                </div>
                <Badge className="bg-blue-100 text-blue-800 text-xs">{t("dashboard.inProgress")}</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                {t("dashboard.buildingEfficiency")}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{t("dashboard.completed7")}</span>
                  <span className="text-muted-foreground">29%</span>
                </div>
                <Progress value={29} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{t("dashboard.dayAgo")}</span>
                  <span>{t("dashboard.endMarch")}</span>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="text-xs">
                  {t("dashboard.continue")}
                </Button>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-card border-border">
              <h3 className="font-medium mb-4 text-card-foreground">{t("dashboard.quickActions")}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm py-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span className="text-card-foreground">{t("dashboard.startNewDiagnostics")}</span>
                </div>
                <div className="flex items-center gap-3 text-sm py-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-card-foreground">{t("dashboard.downloadReports")}</span>
                </div>
                <div className="flex items-center gap-3 text-sm py-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  <span className="text-card-foreground">{t("dashboard.contactSupport")}</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Personal Info */}
          <div className="space-y-6">
            {/* Personal Information */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-medium text-card-foreground">{t("dashboard.personalInfo")}</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">{t("dashboard.email")}</span>
                  <span className="text-card-foreground">aigul.nurdanova@eco.kz</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-card-foreground">+7 (707) 181-40-37</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-card-foreground">{t("dashboard.dateJoined")}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-sm font-medium text-card-foreground">{t("dashboard.profileConfirmation")}</span>
              </div>
            </Card>

            {/* Company Information */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-medium text-card-foreground">{t("dashboard.companyInfo")}</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-card-foreground font-medium">{t("dashboard.companyName")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">{t("dashboard.ecologyForAll")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">{t("dashboard.location")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{t("dashboard.employees")}</span>
                </div>
                <div className="text-primary text-xs cursor-pointer hover:underline">
                  {t("dashboard.website")}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-sm font-medium text-card-foreground">{t("dashboard.companyConfirmation")}</span>
              </div>
            </Card>

            {/* Notifications */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-medium text-card-foreground">{t("dashboard.quickActions")}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-card-foreground">{t("dashboard.startNewDiagnostics")}</span>
                </div>
                <div className="flex items-center gap-3 text-sm py-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-card-foreground">{t("dashboard.downloadAllReports")}</span>
                </div>
                <div className="flex items-center gap-3 text-sm py-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-card-foreground">{t("dashboard.contactSupport")}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
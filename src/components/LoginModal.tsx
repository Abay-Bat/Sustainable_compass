import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ScrollArea } from "./ui/scroll-area";
import { useLanguage } from "../contexts/LanguageContext";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Registration form state
  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    companyName: '',
    industry: '',
    companySize: '',
    city: '',
    password: '',
    confirmPassword: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Check for demo credentials
    if (email === 'demo@sc.com' && password === 'C0mpa$$') {
      onLoginSuccess();
      onClose();
      setEmail('');
      setPassword('');
    } else {
      setError(t("auth.invalidCredentials"));
    }
  };

  const handleRegisterChange = (field: string, value: string) => {
    setRegisterForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleClose = () => {
    // Reset all form states when closing
    setEmail('');
    setPassword('');
    setError('');
    setRegisterForm({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      companyName: '',
      industry: '',
      companySize: '',
      city: '',
      password: '',
      confirmPassword: ''
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md w-full p-0 bg-card border border-border rounded-xl shadow-2xl max-h-[90vh] z-[100]">
        <DialogHeader className="sr-only">
          <DialogTitle>{t("auth.authorization")}</DialogTitle>
          <DialogDescription>
            {t("auth.loginOrRegisterDescription")}
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-8">
          {/* Tab buttons */}
          <div className="flex gap-2 mb-6">
            <button 
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'login' 
                  ? 'bg-muted text-foreground' 
                  : 'text-muted-foreground hover:bg-muted/50'
              }`}
              onClick={() => setActiveTab('login')}
            >
              {t("auth.login")}
            </button>
            <button 
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'register' 
                  ? 'bg-muted text-foreground' 
                  : 'text-muted-foreground hover:bg-muted/50'
              }`}
              onClick={() => setActiveTab('register')}
            >
              {t("auth.register")}
            </button>
          </div>

          {/* Content area with scroll */}
          <ScrollArea className="h-full max-h-[60vh]">
            {activeTab === 'login' ? (
              // Login Form
              <div className="pr-4">
                <div className="mb-6">
                  <h2 className="text-xl font-medium text-card-foreground mb-2">{t("auth.loginTitle")}</h2>
                  <p className="text-sm text-muted-foreground">
                    {t("auth.loginDescription")}
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleLogin}>
                  {error && (
                    <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <Label htmlFor="login-email" className="text-sm font-medium text-card-foreground">
                      {t("auth.email")}
                    </Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="user@example.com"
                      className="mt-1 bg-input-background border-border"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="login-password" className="text-sm font-medium text-card-foreground">
                      {t("auth.password")}
                    </Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      className="mt-1 bg-input-background border-border"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-6">
                    {t("auth.loginButton")}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground mt-4">
                    {t("auth.forgotPassword")}<br />
                    {t("auth.contactSupport")} <a href="mailto:help@example.com" className="text-primary hover:underline">help@example.com</a>
                  </p>
                  
                  <p className="text-center text-xs text-muted-foreground mt-4 p-2 bg-muted rounded">
                    {t("auth.demoAccess")}: demo@sc.com / C0mpa$$
                  </p>
                </form>
              </div>
            ) : (
              // Registration Form
              <div className="pr-4">
                <div className="mb-6">
                  <h2 className="text-xl font-medium text-card-foreground mb-2">{t("auth.registerTitle")}</h2>
                  <p className="text-sm text-muted-foreground">
                    {t("auth.registerDescription")}
                  </p>
                </div>

                <form className="space-y-4">
                  <div>
                    <Label htmlFor="full-name" className="text-sm font-medium text-card-foreground">
                      {t("auth.fullName")}
                    </Label>
                    <Input
                      id="full-name"
                      placeholder={t("auth.fullNamePlaceholder")}
                      className="mt-1 bg-input-background border-border"
                      value={registerForm.fullName}
                      onChange={(e) => handleRegisterChange('fullName', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="register-email" className="text-sm font-medium text-card-foreground">
                        {t("auth.email")}
                      </Label>
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="user@company.ru"
                        className="mt-1 bg-input-background border-border"
                        value={registerForm.email}
                        onChange={(e) => handleRegisterChange('email', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                        {t("auth.phone")}
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+7 (777) 777-77-77"
                        className="mt-1 bg-input-background border-border"
                        value={registerForm.phone}
                        onChange={(e) => handleRegisterChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="position" className="text-sm font-medium text-card-foreground">
                      {t("auth.position")}
                    </Label>
                    <Input
                      id="position"
                      placeholder={t("auth.positionPlaceholder")}
                      className="mt-1 bg-input-background border-border"
                      value={registerForm.position}
                      onChange={(e) => handleRegisterChange('position', e.target.value)}
                    />
                  </div>

                  <div className="pt-2">
                    <h3 className="text-sm font-medium text-card-foreground mb-3">{t("auth.companyInfo")}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="company-name" className="text-sm font-medium text-card-foreground">
                          {t("auth.companyName")}
                        </Label>
                        <Input
                          id="company-name"
                          placeholder={t("auth.companyNamePlaceholder")}
                          className="mt-1 bg-input-background border-border"
                          value={registerForm.companyName}
                          onChange={(e) => handleRegisterChange('companyName', e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="industry" className="text-sm font-medium text-card-foreground">
                            {t("auth.industry")}
                          </Label>
                          <Select value={registerForm.industry} onValueChange={(value) => handleRegisterChange('industry', value)}>
                            <SelectTrigger className="mt-1 bg-input-background border-border">
                              <SelectValue placeholder={t("auth.selectIndustry")} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="energy">{t("auth.industries.energy")}</SelectItem>
                              <SelectItem value="manufacturing">{t("auth.industries.manufacturing")}</SelectItem>
                              <SelectItem value="finance">{t("auth.industries.finance")}</SelectItem>
                              <SelectItem value="tech">{t("auth.industries.tech")}</SelectItem>
                              <SelectItem value="other">{t("auth.industries.other")}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="company-size" className="text-sm font-medium text-card-foreground">
                            {t("auth.companySize")}
                          </Label>
                          <Select value={registerForm.companySize} onValueChange={(value) => handleRegisterChange('companySize', value)}>
                            <SelectTrigger className="mt-1 bg-input-background border-border">
                              <SelectValue placeholder={t("auth.selectSize")} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small">{t("auth.companySizes.small")}</SelectItem>
                              <SelectItem value="medium">{t("auth.companySizes.medium")}</SelectItem>
                              <SelectItem value="large">{t("auth.companySizes.large")}</SelectItem>
                              <SelectItem value="enterprise">{t("auth.companySizes.enterprise")}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="city" className="text-sm font-medium text-card-foreground">
                          {t("auth.city")}
                        </Label>
                        <Input
                          id="city"
                          placeholder={t("auth.cityPlaceholder")}
                          className="mt-1 bg-input-background border-border"
                          value={registerForm.city}
                          onChange={(e) => handleRegisterChange('city', e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="register-password" className="text-sm font-medium text-card-foreground">
                            {t("auth.password")}
                          </Label>
                          <Input
                            id="register-password"
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 bg-input-background border-border"
                            value={registerForm.password}
                            onChange={(e) => handleRegisterChange('password', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="confirm-password" className="text-sm font-medium text-card-foreground">
                            {t("auth.confirmPassword")}
                          </Label>
                          <Input
                            id="confirm-password"
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 bg-input-background border-border"
                            value={registerForm.confirmPassword}
                            onChange={(e) => handleRegisterChange('confirmPassword', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-6">
                    {t("auth.createAccount")}
                  </Button>
                </form>
              </div>
            )}
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
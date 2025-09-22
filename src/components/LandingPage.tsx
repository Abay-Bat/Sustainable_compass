import { forwardRef } from "react";
import { HeroSection } from "./HeroSection";
import { StatsSection } from "./StatsSection";
import { AdvantagesSection } from "./AdvantagesSection";
import { TargetAudienceSection } from "./TargetAudienceSection";
import { DiagnosticsSection } from "./DiagnosticsSection";
import { PricingSection } from "./PricingSection";
import { NewsSection } from "./NewsSection";
import { ContactsSection } from "./ContactsSection";

interface LandingPageProps {
  servicesRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
  newsRef: React.RefObject<HTMLElement>;
  pricingRef?: React.RefObject<HTMLElement>;
  contactsRef: React.RefObject<HTMLElement>;
  onHeroClick?: () => void;
}

export const LandingPage = forwardRef<HTMLDivElement, LandingPageProps>(
  ({ servicesRef, aboutRef, newsRef, pricingRef, contactsRef, onHeroClick }, ref) => {
    return (
      <main ref={ref}>
        <HeroSection onClick={onHeroClick} />
        <StatsSection />
        <AdvantagesSection ref={aboutRef} />
        <TargetAudienceSection />
        <DiagnosticsSection ref={servicesRef} />
        <PricingSection ref={pricingRef} />
        <NewsSection ref={newsRef} />
        <ContactsSection ref={contactsRef} />
      </main>
    );
  }
);

LandingPage.displayName = "LandingPage";
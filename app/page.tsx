import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { ValuePropositionSection } from "@/components/value-proposition-section"
import { CompetitiveAdvantageSection } from "@/components/competitive-advantage-section"
import { ProcessSection } from "@/components/process-section"
import { FAQSection } from "@/components/faq-section"
import { CredentialsSection } from "@/components/credentials-section"
import { CaseStudyLibra } from "@/components/case-study-libra"
import { PartnersSection } from "@/components/partners-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"

export default function FDALandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <ValuePropositionSection />
      <CompetitiveAdvantageSection />
      <ProcessSection />
      <CredentialsSection />
      <CaseStudyLibra />
      <PartnersSection />
      <ContactFormSection />
      <FAQSection />
      <Footer />
    </main>
  )
}

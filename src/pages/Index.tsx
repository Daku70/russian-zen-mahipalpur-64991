import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustSignals from "@/components/TrustSignals";
import ServiceComparison from "@/components/ServiceComparison";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingTransparency from "@/components/PricingTransparency";
import LocationBenefits from "@/components/LocationBenefits";
import AdditionalContent from "@/components/AdditionalContent";
import LocationSEO from "@/components/LocationSEO";
import LocationPages from "@/components/LocationPages";
import InternalLinks from "@/components/InternalLinks";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import OrganizationSchema from "@/components/OrganizationSchema";
import ServiceSchema from "@/components/ServiceSchema";

const Index = () => {
  return (
    <>
      <SEO 
        title="Best Russian Spa in Mahipalpur Delhi | #1 Body Massage Near Airport - Open 24/7 | 350+ Reviews"
        description="★★★★★ #1 Rated Russian Spa in Mahipalpur, Aerocity & Delhi NCR. Authentic Russian Banya, Couples Spa, Thai & Deep Tissue Massage. 10,000+ Happy Clients. ISO Certified. Book Now ☎ +91 98189 31148"
        keywords="Russian spa Mahipalpur, Russian Banya near Delhi airport, body massage Mahipalpur, couples spa Aerocity, Thai massage Delhi, deep tissue massage, spa near me, Russian spa Gurgaon, Russian spa Dwarka, Russian spa Vasant Kunj, best spa in Mahipalpur, aromatherapy massage Delhi, sports massage Aerocity, Swedish massage Mahipalpur, hot stone therapy Delhi NCR"
        canonical="https://mahipalpurspacentre.com/"
      />
      <OrganizationSchema />
      <ServiceSchema />
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <TrustSignals />
        <Services />
        <ServiceComparison />
        <WhyChooseUs />
        <PricingTransparency />
        <LocationBenefits />
        <AdditionalContent />
        <LocationPages />
        <InternalLinks />
        <LocationSEO />
        <Testimonials />
        <CTABanner />
        <FAQ />
        <BookingForm />
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default Index;

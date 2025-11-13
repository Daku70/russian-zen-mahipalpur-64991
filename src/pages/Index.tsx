import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocationBenefits from "@/components/LocationBenefits";
import AdditionalContent from "@/components/AdditionalContent";
import LocationSEO from "@/components/LocationSEO";
import LocationPages from "@/components/LocationPages";
import InternalLinks from "@/components/InternalLinks";
import Testimonials from "@/components/Testimonials";
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
        title="Best Russian Spa in Mahipalpur | #1 Body Massage Near Delhi Airport - Russian Spa Centre"
        description="★★★★★ Premium Russian Spa in Mahipalpur & Aerocity. Authentic Russian Banya, couples spa, Thai massage near Delhi Airport. 350+ Reviews. Open 24/7 ☎ +91 98189 31148"
        keywords="Russian spa Mahipalpur, Russian spa Aerocity, Russian spa near me, Russian spa Gurgaon, Russian spa Dwarka, Russian spa Vasant Kunj, spa near Delhi airport, body massage Mahipalpur, couples spa Aerocity, Thai massage Delhi, Russian Banya Delhi NCR"
        canonical="https://mahipalpurspacentre.com/"
      />
      <OrganizationSchema />
      <ServiceSchema />
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Services />
        <WhyChooseUs />
        <LocationBenefits />
        <AdditionalContent />
        <LocationPages />
        <InternalLinks />
        <LocationSEO />
        <Testimonials />
        <FAQ />
        <BookingForm />
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default Index;

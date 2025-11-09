import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Best Russian Spa in Mahipalpur | Body Massage Near Delhi Airport"
        description="Experience luxury at the best spa in Mahipalpur. Russian body massage, Thai therapy, couples spa near Delhi NCR airport. Open 24/7. Book now: +91 98189 31148"
        keywords="best spa in Mahipalpur, Russian spa Delhi NCR, body massage Mahipalpur, spa near Delhi airport, luxury spa Mahipalpur, couples spa Delhi"
        canonical="https://mahipalpurspacentre.com/"
      />
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <BookingForm />
        <Footer />
        <FloatingCallButton />
      </main>
    </>
  );
};

export default Index;

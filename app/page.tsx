import ArchitectureSection from '@/components/ArchitectureSection';
import CaseStudies from '@/components/CaseStudies';
import ConsultationForm from '@/components/ConsultationForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Methodology from '@/components/Methodology';
import Navbar from '@/components/Navbar';
import ServiceModules from '@/components/ServiceModules';
import WhySapphire from '@/components/WhySapphire';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <ArchitectureSection />
        <WhySapphire />
        <ServiceModules />
        <Methodology />
        <CaseStudies />
        <section className="bg-surface py-16 md:py-20">
          <div className="mx-auto grid max-w-container gap-10 px-5 md:grid-cols-2 md:px-10">
            <FAQ />
            <ConsultationForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


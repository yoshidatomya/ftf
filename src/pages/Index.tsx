import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Philosophy from '@/components/Philosophy';
import Services from '@/components/Services';
import ProjectGallery from '@/components/ProjectGallery';
import BeforeAfter from '@/components/BeforeAfter';
import Strengths from '@/components/Strengths';
import Testimonials from '@/components/Testimonials';
import Target from '@/components/Target';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import SectionNav from '@/components/SectionNav';
import SectionDivider from '@/components/SectionDivider';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SectionNav />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <SectionDivider variant="pattern" />
        <Services />
        <SectionDivider variant="accent" />
        <ProjectGallery />
        <BeforeAfter />
        <SectionDivider variant="pattern" />
        <Strengths />
        <Testimonials />
        <Target />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


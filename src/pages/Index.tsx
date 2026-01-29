import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Strengths from '@/components/Strengths';
import Testimonials from '@/components/Testimonials';
import Target from '@/components/Target';
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
        <SectionDivider variant="pattern" />
        <Services />
        <SectionDivider variant="accent" />
        <Portfolio />
        <SectionDivider variant="pattern" />
        <Strengths />
        <Testimonials />
        <Target />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

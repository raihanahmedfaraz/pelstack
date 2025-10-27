import About from '@/components/homepage/About';
import Blog from '@/components/homepage/Blog';
import CTA from '@/components/homepage/CTA';
import Hero from '@/components/homepage/Hero';
import Process from '@/components/homepage/Process';
import Projects from '@/components/homepage/Projects';
import Services from '@/components/homepage/Services';
import Reviews from '@/components/homepage/Reviews';
import Integration from '@/components/homepage/Integration';
import FAQ from '@/components/homepage/FAQ';
import { Fragment } from 'react';

const Homepage = () => {
  return (
    <Fragment>
      <main className="bg-background-2 dark:bg-background-5 overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Integration/>
        <Reviews />
        <FAQ />
        <Blog />
        <CTA />
      </main>
    </Fragment>
  );
};

Homepage.displayName = 'Homepage';
export default Homepage;

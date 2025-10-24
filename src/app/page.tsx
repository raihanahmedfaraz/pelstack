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
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Fragment } from 'react';

const Homepage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-white/60 backdrop-blur-[25px] top-5 dark:border dark:border-stroke-7 dark:bg-background-7"
        btnClassName="btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark"
      />
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
      <FooterOne className="dark:bg-background-8" />
    </Fragment>
  );
};

Homepage.displayName = 'Homepage';
export default Homepage;

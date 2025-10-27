import FAQ from '@/components/homepage/FAQ';
import CTA from '@/components/team/CTA';
import Experience from '@/components/team/Experience';
import Teams from '@/components/team/Teams';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import TestimonialV2 from '@/components/shared/TestimonialV2';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Our Team - pelstack',
};

const TeamPage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Our Team" heading="Our Team" link="/team" />
        <Teams />
        <Experience />
        <TestimonialV2 />
        <FAQ />
        <CTA />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default TeamPage;

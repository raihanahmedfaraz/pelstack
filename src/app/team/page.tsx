import FAQ from '@/components/homepage/FAQ';
import CTA from '@/components/homepage/CTA';
import Experience from '@/components/team/Experience';
import Teams from '@/components/team/Teams';
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
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Our Team" heading="Our Team" link="/team" />
        <Teams />
        <Experience />
        <TestimonialV2 />
        <FAQ />
        <CTA />
      </main>
    </Fragment>
  );
};

export default TeamPage;

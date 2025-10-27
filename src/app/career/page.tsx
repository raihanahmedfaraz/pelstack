import CareerContent from '@/components/career/CareerContent';
import Positions from '@/components/career/Positions';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Career - pelstack',
};

const Career = () => {
  return (
    <Fragment>
      <main className="bg-background-3 dark:bg-background-5">
        <PageHero title="Career" heading="Career" link="/career" className="bg-background-3 dark:bg-background-5" />
        <CareerContent />
        <Positions />
        <CTA />
      </main>
    </Fragment>
  );
};

export default Career;

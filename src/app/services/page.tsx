import Services from '@/components/services/Services';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Our Services - pelstack',
};

const ServicesPage = () => {
  return (
    <Fragment>
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero title="Our Services" heading="Our Services" link="/services" />
        <Services />
        <CTA />
      </main>
    </Fragment>
  );
};

export default ServicesPage;

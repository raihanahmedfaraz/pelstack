import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import Contact from '@/components/support/Contact';
import NeedHelp from '@/components/support/NeedHelp';
import Services from '@/components/support/Services';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Support - pelstack',
};

const Support = () => {
  return (
    <Fragment>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Support" heading="Support" link="/support" />
        <NeedHelp />
        <Services />
        <Contact />
        <CTA />
      </main>
    </Fragment>
  );
};

export default Support;

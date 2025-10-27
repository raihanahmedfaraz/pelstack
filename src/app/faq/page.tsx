import FaqTab from '@/components/faq/FaqTab';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'FAQ - pelstack',
};

const FAQ = () => {
  return (
    <Fragment>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="FAQ" heading="Frequently asked questions" link="/faq" />
        <FaqTab />
        <CTA />
      </main>
    </Fragment>
  );
};

export default FAQ;

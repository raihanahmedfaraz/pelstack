import DocsContent from '@/components/documentation/DocsContent';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Documentation - pelstack',
};

const Documentation = () => {
  return (
    <Fragment>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Documentation" heading="Documentation" link="/documentation" />
        <DocsContent />
        <CTA />
      </main>
    </Fragment>
  );
};

export default Documentation;

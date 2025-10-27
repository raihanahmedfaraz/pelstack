import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import PrivacyContent from '@/components/privacy/PrivacyContent';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Privacy - pelstack',
};

const Privacy = () => {
  return (
    <Fragment>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Privacy" heading="Privacy" link="/privacy" />
        <PrivacyContent />
        <CTA />
      </main>
    </Fragment>
  );
};

export default Privacy;

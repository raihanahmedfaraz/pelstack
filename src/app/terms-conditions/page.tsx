import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import TermsConditionContent from '@/components/terms-conditions/TermsConditionContent';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Terms & Conditions - pelstack',
};

const TermsConditions = () => {
  return (
    <Fragment>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Terms & Conditions" heading="Terms & Conditions" link="/terms-conditions" />
        <TermsConditionContent />
        <CTA />
      </main>
    </Fragment>
  );
};

export default TermsConditions;

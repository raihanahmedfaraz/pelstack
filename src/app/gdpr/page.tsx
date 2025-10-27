import GdprContent from '@/components/gdpr/GdprContent';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDPR - pelstack',
};

const GDPR = () => {
  return (
    <>
      <main className="bg-background-3 dark:bg-background-6">
        <PageHero title="GDPR" heading="GDPR" link="/gdpr" />
        <GdprContent />
        <CTA />
      </main>
    </>
  );
};

export default GDPR;

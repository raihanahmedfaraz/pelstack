import RefundPolicyContent from '@/components/refund-policy/RefundPolicyContent';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy - pelstack',
};

const RefundPolicy = () => {
  return (
    <>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Refund Policy" heading="Refund Policy" link="/refund-policy" />
        <RefundPolicyContent />
        <CTA />
      </main>
    </>
  );
};

export default RefundPolicy;

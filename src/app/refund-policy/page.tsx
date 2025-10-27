import RefundPolicyContent from '@/components/refund-policy/RefundPolicyContent';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy - pelstack',
};

const RefundPolicy = () => {
  return (
    <>
      <NavbarOne />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Refund Policy" heading="Refund Policy" link="/refund-policy" />
        <RefundPolicyContent />
        <CTAV1 />
      </main>
      <FooterOne />
    </>
  );
};

export default RefundPolicy;

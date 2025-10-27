import GdprContent from '@/components/gdpr/GdprContent';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDPR - pelstack',
};

const GDPR = () => {
  return (
    <>
      <NavbarOne />
      <main className="bg-background-3 dark:bg-background-6">
        <PageHero title="GDPR" heading="GDPR" link="/gdpr" />
        <GdprContent />
        <CTAV1 />
      </main>
      <FooterOne />
    </>
  );
};

export default GDPR;

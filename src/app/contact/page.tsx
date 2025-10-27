import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - pelstack',
  description: 'Contact Us Page - pelstack',
};

const ContactPage = () => {
  return (
    <>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Contact us"
          heading="Contact us"
          link="/contact"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
        />
        <ContactInfo />
        <ContactMap />
        <CTA />
      </main>
    </>
  );
};

ContactPage.displayName = 'ContactPage';
export default ContactPage;

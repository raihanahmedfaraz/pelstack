import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - pelstack',
  description: 'Contact Us Page - pelstack',
};

const ContactPage = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Contact us"
          heading="Contact us"
          link="/contact"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
        />
        <ContactInfo />
        <ContactMap />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText="Get started"
          ctaBtnText="Contact us"
          ctaHeading="Get in touch"
          description="We're here to help you with your inquiries and needs. Feel free to reach out to us using the contact form below, and we'll get back to you as soon as possible."
        />
      </main>
      <FooterOne />
    </>
  );
};

ContactPage.displayName = 'ContactPage';
export default ContactPage;

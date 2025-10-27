import CareerContent from '@/components/career/CareerContent';
import Positions from '@/components/career/Positions';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Career - pelstack',
};

const Career = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-5">
        <PageHero title="Career" heading="Career" link="/career" className="bg-background-3 dark:bg-background-5" />
        <CareerContent />
        <Positions />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="badge-green"
          badgeText="Get Started"
          ctaHeading="Ready to start earning with pelstack?"
          description="If you have any questions, feel free to reach out to our team."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get started"
        />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default Career;

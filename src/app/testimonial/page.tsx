import Reviews from '@/components/shared/reviews/Reviews';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonial - NextSaaS',
  description: 'Testimonial - NextSaaS',
};

const TestimonialPage = () => {
  return (
    <>
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero title="Testimonial" heading="Testimonial" link="/testimonial" />
        <Reviews
          badgeClass="!badge-green"
          className="pt-[100px] pb-[75px] md:pb-[100px] lg:pb-[200px] bg-background-1 dark:bg-background-6"
        />
        <CTA />
      </main>
    </>
  );
};
TestimonialPage.displayName = 'TestimonialPage';
export default TestimonialPage;

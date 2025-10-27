import Feature from '@/components/case-study/Feature';
import Success from '@/components/case-study/Success';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study - pelstack',
  description: 'Case Study - pelstack',
};

const CaseStudyPage = () => {
  return (
    <>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Case Study"
          heading="Case Study"
          link="/case-study"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
        />
        <Success />
        <Feature />
        <CTA />
      </main>
    </>
  );
};
CaseStudyPage.displayName = 'CaseStudyPage';
export default CaseStudyPage;

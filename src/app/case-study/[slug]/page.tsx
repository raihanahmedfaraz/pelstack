import CaseStudyDetails from '@/components/case-study/CaseStudyDetails';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const caseStudies = getMarkDownData('src/data/case-study');
  return caseStudies.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = {
  title: 'Case Study Details - pelstack',
  description: 'Case Study Details - pelstack',
};

interface CaseStudyDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const CaseStudyDetailsPage = async ({ params }: CaseStudyDetailsPageProps) => {
  const slug = (await params).slug;

  return (
    <>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Case Study Details"
          heading="Case Study Details"
          link="/case-study"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
        />
        <CaseStudyDetails slug={slug} />

        <CTA />
      </main>
    </>
  );
};
CaseStudyDetailsPage.displayName = 'CaseStudyDetailsPage';
export default CaseStudyDetailsPage;

import CareerDetailsBody from '@/components/career/CareerDetailsBody';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export async function generateStaticParams() {
  const careers = getMarkDownData('src/data/career');
  return careers.map((career) => ({
    slug: career.slug,
  }));
}

export const metadata: Metadata = {
  title: 'Apply Now - pelstack',
};

const CareerDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <Fragment>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Apply Now"
          heading="Apply Now"
          link="/career"
          className="bg-background-3 dark:bg-background-7"
        />
        <CareerDetailsBody slug={slug} />
        <CTA />
      </main>
    </Fragment>
  );
};

CareerDetails.displayName = 'CareerDetails';
export default CareerDetails;

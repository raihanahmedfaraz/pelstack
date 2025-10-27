import Contents from '@/components/services/details/Contents';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export async function generateStaticParams() {
  const services = getMarkDownData('src/data/services');
  return services.map((service) => ({ slug: service.slug }));
}

export const metadata: Metadata = {
  title: 'Our Services Details - pelstack',
};

const OurServicesDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <Fragment>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Our Services Details" heading="Services Details" link="#" />
        <Contents slug={slug} />
        <CTA />
      </main>
    </Fragment>
  );
};

export default OurServicesDetails;

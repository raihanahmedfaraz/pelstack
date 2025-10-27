import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import Contact from '@/components/team/Contact';
import Details from '@/components/team/Details';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export async function generateStaticParams() {
  const teams = getMarkDownData('src/data/team', false, 'name');
  return teams.map((team) => ({
    slug: team.slug,
  }));
}

export const metadata: Metadata = {
  title: 'Team Details - pelstack',
};

const TeamDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <Fragment>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Team Details" heading="Team Details" link="/team-details" />
        <Details slug={slug} />
        <Contact />
        <CTA />
      </main>
    </Fragment>
  );
};

export default TeamDetails;

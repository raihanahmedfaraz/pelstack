import VisionStatement from '@/components/about/VisionStatement';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Team from '@/components/about/Team';
import CTA from '@/components/homepage/CTA';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import OurAchievements from '@/components/shared/OurAchievements';
import PageHero from '@/components/shared/PageHero';
import OurMission from '@/components/about/OurMission';
import Innovation from '@/components/about/Innovation';
import { projectAchievements } from '@/data/achievements';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - pelstack',
  description: 'About Page - pelstack',
};

const AboutPage01 = () => {
  return (
    <>
      <NavbarOne
        megaMenuColor="dark:bg-background-7"
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          className="bg-background-3 dark:bg-background-7"
          title="About us"
          heading="About us"
          link="/about"
        />
        <VisionStatement />
        <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
          <div className="main-container">
            <div className="mb-14 md:mb-[70px] space-y-3 text-center">
              <RevealAnimation delay={0.2}>
                <h2>Over a decade of experience in this field.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[744px] mx-auto">
                  With more than ten years of hands-on experience, we’ve built a strong foundation of knowledge, skill,
                  and trust in our industry. Over the years, we’ve navigated evolving trends, embraced new technologies,
                  and
                </p>
              </RevealAnimation>
            </div>
            <OurAchievements achievements={projectAchievements} />
          </div>
        </section>
        <WhyChooseUs />
        <OurMission />
        <Innovation />
        <Team className="bg-background-3 dark:bg-background-7 py-[100px]" badgeColor="badge-cyan" />
        <CTA />
      </main>
      <FooterOne />
    </>
  );
};
AboutPage01.displayName = 'AboutPage01';
export default AboutPage01;

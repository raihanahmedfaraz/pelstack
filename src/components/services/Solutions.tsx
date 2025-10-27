import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import solution1 from '@public/images/services/progress-tracking.png';

const Solutions = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-24 md:pb-36 lg:pb-40 xl:pb-[200px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-yellow-v2">Solutions</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2 className="max-w-[878px] mx-auto">Solutions designed to accelerate your growth.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[700px] mx-auto">
                We build modular, scalable features you can mix and match to fit your workflow and deliver results
                fast.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-5 items-center">
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <RevealAnimation delay={0.3}>
              <figure className="rounded-[20px] overflow-hidden bg-background-3 dark:bg-background-7 p-6">
                <Image src={solution1} alt="solution" className="w-full h-auto" />
              </figure>
            </RevealAnimation>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-6">
            <RevealAnimation delay={0.4}>
              <h3 className="text-heading-3 mb-4">Track performance in real time</h3>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <p className="mb-6">
                Monitor key metrics across teams and projects with a single dashboard. Stay in sync and make
                data-driven decisions without switching tools.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <LinkButton href="#" className="btn btn-md btn-secondary dark:hover:btn-accent hover:btn-primary">
                Learn more
              </LinkButton>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

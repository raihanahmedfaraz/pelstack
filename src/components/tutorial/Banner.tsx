import learnBanner from '@public/images/learn-page/learn-banner.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Banner = () => {
  return (
    <section className="pt-[100px] pb-[100px] md:pb-[200px]">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row items-center lg:gap-[100px] gap-y-14">
          <div className="flex-1 space-y-14 max-w-[540px] mx-auto lg:mx-0 lg:max-w-full text-center lg:text-left">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h2>Built for your business. Adapted to your workflow.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                  pelstack is designed to serve a wide range of teams and industries. Whether you&apos;re managing data,
                  scaling operations, optimizing finances, or streamlining customer experiences—pelstack is the platform
                  that grows with you.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.3} instant>
              <div>
                <LinkButton
                  href="/our-services-01"
                  className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent">
                  Explore the platform
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="flex-1">
            <RevealAnimation delay={0.3} instant>
              <figure className="opacity-0 max-w-[596px] w-full rounded-[20px] overflow-hidden">
                <Image src={learnBanner} className="w-full h-full object-cover" alt="learn banner" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

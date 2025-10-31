import hero1 from '@public/images/homepage/hero-slide-1.jpg';
import hero2 from '@public/images/homepage/hero-slide-2.jpg';
import hero3 from '@public/images/homepage/hero-slide-3.jpg';
import hero4 from '@public/images/homepage/hero-slide-4.jpg';
import hero5 from '@public/images/homepage/hero-slide-5.jpg';
import hero6 from '@public/images/homepage/hero-slide-6.jpg';
import hero7 from '@public/images/homepage/hero-slide-7.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import ScrollExpand from './ScrollExpand';
import GradientAnimation from './GradientAnimation';
import HeroMaskEffect from './HeroMaskEffect';

const Hero = () => {
  return (
    <section className="lg:pb-[100px] pb-16 lg:pt-[234px] pt-[150px] relative overflow-hidden bg-white dark:bg-background-5" id="hero">
      <HeroMaskEffect />
      <RevealAnimation delay={0.6} offset={0}>
        <figure className="absolute inset-0 w-full h-full z-0">
          <GradientAnimation />
        </figure>
      </RevealAnimation>
      <div className="main-container mb-[100px] relative z-1">
        <div className="space-y-14 text-center">
          <div className="space-y-4">
            <RevealAnimation delay={0.2}>
              <h1 className="mx-auto max-w-[886px] w-full">Design that tells stories, code that connects.</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[700px] w-full">
                Stay updated with the latest bitcoin price index, offering real-time data, historical trends, and market
                insights to keep you informed about the cryptocurrency&apos;s value fluctuations.
              </p>
            </RevealAnimation>
          </div>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4">
            <RevealAnimation delay={0.3} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/about"
                  className="btn dark:btn-accent btn-md md:btn-xl btn-secondary hover:btn-white dark:hover:btn-white-dark w-[90%] md:w-auto">
                  View portfolio
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5} direction="left" offset={60}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/contact"
                  className="btn hover:btn-secondary btn-md md:btn-xl btn-white dark:btn-white-dark dark:hover:btn-accent w-[90%] md:w-auto">
                  Book a call
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
        </div>
      </div>
      <RevealAnimation delay={0.2} offset={90}>
        <div className="relative z-2 w-full">
          <div className="flex gap-4 items-center overflow-x-auto overflow-y-hidden scroll-bar pb-4 px-4 md:justify-center md:px-0 md:overflow-x-visible">
            <figure className="rounded-[20px] overflow-hidden h-[280px] sm:h-80 md:max-h-[380px] min-w-[200px] sm:min-w-[220px] md:min-w-[257px] w-[200px] sm:w-[220px] md:w-[257px] shrink-0">
              <Image src={hero1} className="w-full h-full object-cover" alt="hero-slide-1" priority />
            </figure>
            <figure className="rounded-[20px] overflow-hidden h-[280px] sm:h-80 md:max-h-[380px] min-w-[200px] sm:min-w-[220px] md:min-w-[257px] w-[200px] sm:w-[220px] md:w-[257px] shrink-0">
              <Image src={hero2} className="w-full h-full object-cover" alt="hero-slide-2" priority />
            </figure>
            <figure className="rounded-[20px] overflow-hidden h-[280px] sm:h-80 md:max-h-[380px] min-w-[200px] sm:min-w-[220px] md:min-w-[257px] w-[200px] sm:w-[220px] md:w-[257px] shrink-0">
              <Image src={hero3} className="w-full h-full object-cover" alt="hero-slide-3" priority />
            </figure>
            <ScrollExpand image={hero4} />
            <figure className="rounded-[20px] overflow-hidden h-[280px] sm:h-80 md:max-h-[380px] min-w-[200px] sm:min-w-[220px] md:min-w-[257px] w-[200px] sm:w-[220px] md:w-[257px] shrink-0">
              <Image src={hero5} className="w-full h-full object-cover" alt="hero-slide-5" />
            </figure>
            <figure className="rounded-[20px] overflow-hidden h-[280px] sm:h-80 md:max-h-[380px] min-w-[200px] sm:min-w-[220px] md:min-w-[257px] w-[200px] sm:w-[220px] md:w-[257px] shrink-0">
              <Image src={hero6} className="w-full h-full object-cover" alt="hero-slide-6" />
            </figure>
            <figure className="rounded-[20px] overflow-hidden h-[280px] sm:h-80 md:max-h-[380px] min-w-[200px] sm:min-w-[220px] md:min-w-[257px] w-[200px] sm:w-[220px] md:w-[257px] shrink-0">
              <Image src={hero7} className="w-full h-full object-cover" alt="hero-slide-7" />
            </figure>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Hero;

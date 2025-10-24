import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import gradient44 from '@public/images/gradient/gradient-44.png';
import behance from '@public/images/icons/behance.svg';
import dribbble from '@public/images/icons/dribbble.svg';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import darkLogo from '@public/images/shared/dark-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';

const FooterFour = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative z-0 overflow-hidden', className)}>
      <RevealAnimation delay={0.3} offset={50} direction="up">
        <figure className="pointer-events-none absolute -top-[1320px] left-1/2 -z-1 size-[1635px] -translate-x-1/2 select-none">
          <Image src={gradient44} alt="footer-four-gradient" className="size-full object-cover" />
        </figure>
      </RevealAnimation>
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 xl:col-span-4">
              <div className="max-w-[306px]">
                <figure>
                  <Image src={darkLogo} alt="NextSass Logo" />
                </figure>
                <p className="text-accent/60 text-tagline-1 mt-4 mb-7 font-normal">
                  Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.
                </p>
                <div className="flex items-center gap-3">
                  <Link target="_blank" href="https://www.facebook.com">
                    <span className="sr-only">Facebook</span>
                    <Image className="size-6" src={facebook} alt="Facebook" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://www.instagram.com">
                    <span className="sr-only">Instagram</span>
                    <Image className="size-6" src={instagram} alt="Instagram" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://www.youtube.com">
                    <span className="sr-only">Youtube</span>
                    <Image className="size-6" src={youtube} alt="Youtube" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://www.linkedin.com">
                    <span className="sr-only">LinkedIn</span>
                    <Image className="size-6" src={linkedin} alt="LinkedIn" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://www.dribbble.com">
                    <span className="sr-only">Dribbble</span>
                    <Image className="size-6" src={dribbble} alt="Dribbble" />
                  </Link>
                  <div className="bg-stroke-1/20 h-6 w-px" />
                  <Link target="_blank" href="https://www.behance.net">
                    <span className="sr-only">Behance</span>
                    <Image className="size-6" src={behance} alt="Behance" />
                  </Link>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8">
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.2}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Company</p>
                  <ul className="space-y-5">
                    <li>
                      <Link href="/about-01" className="footer-link">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/career" className="footer-link">
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link href="/case-study" className="footer-link">
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="footer-link">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.3}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Support</p>
                  <ul className="space-y-5">
                    <li>
                      <Link href="/faq" className="footer-link">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/documentation" className="footer-link">
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link href="/tutorial" className="footer-link">
                        Tutorial
                      </Link>
                    </li>
                    <li>
                      <Link href="/support" className="footer-link">
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.4}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Legal Policies</p>
                  <ul className="space-y-5">
                    <li>
                      <Link href="/terms-conditions" className="footer-link">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="footer-link">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/refund-policy" className="footer-link">
                        Refund Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/gdpr" className="footer-link">
                        GDPR Compliance
                      </Link>
                    </li>
                    <li>
                      <Link href="/affiliate-policy" className="footer-link">
                        Affiliate Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <div className="relative pt-[26px] pb-[42px] text-center">
          <FooterDivider className="bg-accent/10 dark:bg-stroke-6" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-tagline-1 text-primary-50 font-normal">
              Copyright ©Pixels71. NextSaaS – smart application for modern business
            </p>
          </RevealAnimation>
        </div>
      </div>
      <ThemeToggle />
    </footer>
  );
};

export default FooterFour;

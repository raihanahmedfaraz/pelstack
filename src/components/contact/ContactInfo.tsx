import gradient22 from '@public/images/gradient/gradient-22.png';
import gradient6 from '@public/images/gradient/gradient-6.png';
import gradient17 from '@public/images/gradient/gradient-17.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const contactInfoItems = [
  {
    id: 1,
    icon: '/images/icons/home.svg',
    title: 'Our Address',
    content: '2464 Royal Ln. Mesa, New Jersey 45463',
    gradient: gradient22,
    gradientClass: 'top-[-187px] left-[174px] -rotate-[78deg]',
  },
  {
    id: '2',
    icon: '/images/icons/mail-open.svg',
    title: 'Email',
    content: 'help@pelstack.com',
    link: 'mailto:help@pelstack.com',
    gradient: gradient17,
    gradientClass: 'top-[-187px] left-[174px] -rotate-[78deg]',
  },
  {
    id: 3,
    icon: '/images/icons/phone-right.svg',
    title: 'Call Us',
    content: '+391 (0)35 2568 4593',
    link: 'tel:+391035256845933',
    gradient: gradient6,
    gradientClass: 'top-[-184px] left-[-185px]',
  },
];

const ContactInfo = () => {
  return (
    <section className="pt-7 pb-14 md:pb-16 lg:pb-20 xl:pb-[100px]" aria-label="Contact Information and Form">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="max-w-[680px] mx-auto text-center space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Reach out to our support team for help.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Whether you have a question, need technical assistance, or just want some guidance, our support team is
                here to help. We&apos;re available around the clock to provide quick and friendly support.
              </p>
            </RevealAnimation>
          </div>
          {/* contact info cards - horizontal layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
            {contactInfoItems.map((item) => (
              <RevealAnimation key={item.id} delay={0.4}>
                <div className="bg-secondary dark:bg-background-6 rounded-[20px] p-11 space-y-6 w-full text-center relative overflow-hidden">
                  {/* bg overlay  */}
                  <figure
                    className={`absolute select-none pointer-events-none size-[350px] overflow-hidden ${item.gradientClass}`}>
                    <Image src={item.gradient} alt="Decorative gradient overlay" className="size-full object-cover" />
                  </figure>
                  <figure className="size-10 overflow-hidden mx-auto">
                    <Image src={item.icon} alt={`${item.title} icon`} className="size-full object-cover" width={40} height={40} />
                  </figure>
                  <div className="space-y-2.5">
                    <p className="text-heading-6 text-accent">{item.title}</p>
                    {item.link ? (
                      <p className="text-accent/60">
                        <Link href={item.link}>{item.content}</Link>
                      </p>
                    ) : (
                      <p className="text-accent/60">{item.content}</p>
                    )}
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ContactInfo.displayName = 'ContactInfo';
export default ContactInfo;

import RevealAnimation from '../animation/RevealAnimation';

const OurMission = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px]">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-14 xl:gap-x-28 items-center">
          <div className="col-span-12 lg:col-span-6 mx-4 xl:mx-0">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan mb-5">Our Mission</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2>Empowering teams to collaborate and thrive with intelligent</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p>
                  In today&apos;s fast-paced, digitally connected world, successful teams rely on more than just
                  talent—they thrive on intelligent collaboration.
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* Vision Section */}
          <div className="col-span-12 lg:col-span-6 mx-4 xl:mx-0">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan mb-5">Our Vision</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2>Motivated by Intent, steered by insight</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p>
                  Every great journey begins with a clear purpose—and it&apos;s that sense of intent that drives everything we do. But purpose alone isn&apos;t enough. To truly make meaningful progress, we combine our motivation with sharp.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

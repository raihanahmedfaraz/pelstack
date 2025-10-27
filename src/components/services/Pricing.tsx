import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Pricing = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-24 md:pb-36 lg:pb-40 xl:pb-[200px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-yellow-v2">Pricing</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2 className="max-w-[878px] mx-auto">Simple pricing that scales with you.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[700px] mx-auto">
                Choose a plan that fits your team. Upgrade or cancel anytime—no hidden fees.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-5">
          {["Starter","Pro","Business"].map((tier, idx) => (
            <div key={tier} className="col-span-12 md:col-span-6 xl:col-span-4">
              <RevealAnimation delay={0.5 + idx * 0.1}>
                <div className="p-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6 text-center">
                  <h3 className="text-heading-5">{tier}</h3>
                  <p className="text-secondary/60 dark:text-accent/60">
                    Everything you need to get started and grow.
                  </p>
                  <div>
                    <LinkButton href="#" className="btn btn-white dark:btn-transparent dark:hover:btn-accent hover:btn-secondary btn-md">
                      Choose plan
                    </LinkButton>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

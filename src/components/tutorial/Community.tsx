import RevealAnimation from '../animation/RevealAnimation';

interface CommunityFeature {
  icon: string;
  title: string;
  description: string;
}

const communityFeatures: CommunityFeature[] = [
  {
    icon: 'ns-shape-9',
    title: 'Open discussions',
    description: 'Learn how to streamline your workflow with smart automation.',
  },
  {
    icon: 'ns-shape-3',
    title: 'Use case sharing',
    description: 'Monitor your suppliers, manage purchase orders seamlessly, and keep an eye on your',
  },
  {
    icon: 'ns-shape-12',
    title: 'Feedback & feature requests',
    description: 'Help your team stay aligned and productive using shared dashboards and custom roles.',
  },
];

const Community = () => {
  return (
    <section className="bg-background-3 dark:bg-background-5 md:py-[100px] py-[50px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>Join the pelstack community</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p>Ask questions, share solutions, and connect with other users around the world.</p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-8">
          {communityFeatures.map((feature, index) => (
            <RevealAnimation key={feature.title} delay={0.3 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6 text-center bg-background-1 rounded-[20px] sm:p-11 p-7 dark:bg-background-6">
                  <div className="mx-auto">
                    <span className={`${feature.icon} text-[52px] text-secondary dark:text-accent`}> </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;

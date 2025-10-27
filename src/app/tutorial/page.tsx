import Banner from '@/components/tutorial/Banner';
import Blog from '@/components/tutorial/Blog';
import Community from '@/components/tutorial/Community';
import Features from '@/components/tutorial/Features';
import Integration from '@/components/tutorial/Integration';
import Services from '@/components/tutorial/Services';
import Tutorials from '@/components/tutorial/Tutorials';

export const metadata = {
  title: 'Tutorial - Learn & Master Our Platform',
  description: 'Explore tutorials, guides, and resources to master our platform.',
};

const TutorialPage = () => {
  return (
    <>
      <Banner />
      <Features />
      <Tutorials />
      <Services />
      <Integration />
      <Blog />
      <Community />
    </>
  );
};

export default TutorialPage;

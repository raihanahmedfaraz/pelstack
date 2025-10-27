'use client';

import dynamic from 'next/dynamic';
import RevealAnimation from '../animation/RevealAnimation';

const Map = dynamic(() => import('../shared/Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      Loading map...
    </div>
  ),
});

const ContactMap = () => {
  return (
  <section className="md:pt-20 lg:pt-25 pb-[100px] md:pb-[150px] lg:pb-[200px]" aria-label="Location Map">
      <div className="main-container">
        <RevealAnimation>
          <div className="rounded-[20px] bg-white dark:bg-background-6 p-2.5">
            <div className="w-full h-[300px] overflow-hidden rounded-2xl lg:h-[566px]">
              <Map />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

ContactMap.displayName = 'ContactMap';
export default ContactMap;

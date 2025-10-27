import { IService } from '@/interface';
import getMarkDownContent from '@/utils/getMarkDownContent';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../../animation/RevealAnimation';
import TableOfContent from './TableOfContent';
import UserReview from './UserReview';

const Contents = ({ slug }: { slug: string }) => {
  const service = getMarkDownContent('src/data/services/', slug);

  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-24 md:pb-36 lg:pb-44 xl:pb-[200px]">
      <div className="main-container">
        <div className="flex items-start lg:gap-[72px]">
          <div className="lg:max-w-[767px] max-w-full w-full">
            <RevealAnimation delay={0.3}>
              <div className="services-details-content mb-[72px]">
                <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{service.content}</ReactMarkdown>
              </div>
            </RevealAnimation>

            {/* user review  */}
            <UserReview service={service.data as IService} />
          </div>

          {/* Table of Contents */}
          <TableOfContent markdownContent={service.content} />
        </div>
      </div>
    </section>
  );
};
Contents.displayName = 'Contents';
export default Contents;

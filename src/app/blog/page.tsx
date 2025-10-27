import BlogShowcase from '@/components/blog/BlogShowcase';
import FeaturedBlog from '@/components/blog/FeaturedBlog';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - pelstack',
};

const BlogPage = () => {
  return (
    <>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Our Blog" heading="Blog" />
        <FeaturedBlog />
        <BlogShowcase />
        <CTA />
      </main>
    </>
  );
};

export default BlogPage;

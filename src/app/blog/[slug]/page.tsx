import BlogContent from '@/components/blog-details/BlogContent';
import CTA from '@/components/homepage/CTA';
import PageHero from '@/components/shared/PageHero';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const blogs = getMarkDownData('src/data/blogs');
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = {
  title: 'Blog Details',
};

const BlogDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  const blogContent = getMarkDownContent('src/data/blogs/', slug);

  return (
    <>
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Our Blog" heading="Blog" />
        <BlogContent blog={blogContent} />
        <CTA />
      </main>
    </>
  );
};

export default BlogDetails;

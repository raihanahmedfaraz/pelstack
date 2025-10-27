// This component is no longer used since Blog is now a direct link without dropdown
// Kept for backward compatibility with existing navbar components

interface BlogMenuProps {
  className?: string;
}

const BlogMenu = (_props: BlogMenuProps) => {
  // Blog navigation is now a direct link, so this component is not rendered
  return null;
};

export default BlogMenu;

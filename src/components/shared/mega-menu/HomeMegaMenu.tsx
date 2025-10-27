// This component is no longer used since Home is now a direct link without dropdown
// Kept for backward compatibility with existing navbar components

interface HomeMegaMenuProps {
  className?: string;
}

const HomeMegaMenu = (_props: HomeMegaMenuProps) => {
  // Home navigation is now a direct link, so this component is not rendered
  return null;
};

export default HomeMegaMenu;

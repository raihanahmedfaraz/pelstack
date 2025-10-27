// This component is no longer used since About is now a direct link without dropdown
// Kept for backward compatibility with existing navbar components

interface AboutMenuProps {
  className?: string;
}

const AboutMenu = (_props: AboutMenuProps) => {
  // About navigation is now a direct link, so this component is not rendered
  return null;
};

export default AboutMenu;

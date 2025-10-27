// This component is no longer used since About is now a direct link without dropdown
// Kept for backward compatibility with existing navbar components

interface AboutMenuProps {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AboutMenu = (props: AboutMenuProps) => {
  // About navigation is now a direct link, so this component is not rendered
  return null;
};

export default AboutMenu;

// This component is no longer used since Services is now a direct link without dropdown
// Kept for backward compatibility with existing navbar components

interface ServicesMenuProps {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ServicesMenu = (props: ServicesMenuProps) => {
  // Services navigation is now a direct link, so this component is not rendered
  return null;
};

ServicesMenu.displayName = 'ServicesMenu';

export default ServicesMenu;

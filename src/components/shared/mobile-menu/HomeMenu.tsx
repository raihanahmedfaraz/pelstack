// This component is no longer used since Home is now a direct link without submenu
// The mobile menu will render Home as a simple link through MobileMenu.tsx

import Link from 'next/link';

const HomeMenu = () => {
  return (
    <li>
      <Link
        href="/"
        className="text-tagline-1 text-secondary dark:text-accent border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-medium transition-all duration-200 hover:text-primary-500">
        Home
      </Link>
    </li>
  );
};

HomeMenu.displayName = 'HomeMenu';

export default HomeMenu;

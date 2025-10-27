import Link from 'next/link';

const ServicesMenu = () => {
  return (
    <li>
      <Link
        href="/services"
        className="text-tagline-1 border-stroke-4 dark:border-stroke-6 flex w-full items-center justify-between border-b py-3 text-left font-normal text-secondary/60 transition-all duration-200 hover:text-secondary dark:text-accent/60 hover:dark:text-accent">
        <span>Services</span>
      </Link>
    </li>
  );
};

ServicesMenu.displayName = 'ServicesMenu';

export default ServicesMenu;

import { MegaMenuItem as MegaMenuItemType } from '@/data/header';
import Link from 'next/link';

interface MegaMenuItemProps {
  item: MegaMenuItemType;
}

const MegaMenuItem = ({ item }: MegaMenuItemProps) => {
  return (
    <li>
      <Link
        href={item.href}
        className="text-secondary/60 dark:text-accent/60 dark:hover:text-accent group/item text-tagline-1 hover:text-secondary flex items-center gap-1 font-normal transition-all duration-200">
        <span>{item.label}</span>
        <span className="opacity-0 transition-all duration-200 group-hover/item:translate-x-2 group-hover/item:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 12L12 8L8 4"
              className="stroke-secondary dark:stroke-accent"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </li>
  );
};

export default MegaMenuItem;

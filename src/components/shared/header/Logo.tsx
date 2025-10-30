import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="hidden lg:block lg:w-[180px]">
          {/* Light mode logo */}
          <Image
            src="/images/shared/main-logo.svg"
            alt="pelstack"
            width={180}
            height={44}
            className="block dark:hidden"
          />
          {/* Dark mode logo */}
          <Image
            src="/images/shared/dark-logo.svg"
            alt="pelstack"
            width={180}
            height={44}
            className="hidden dark:block"
          />
        </figure>

        {/* mobile logo */}
        <figure className="block w-[180px] lg:hidden">
          <Image 
            src="/images/shared/main-logo.svg" 
            alt="pelstack" 
            width={180} 
            height={44} 
            className="block w-full dark:hidden" 
          />
          <Image 
            src="/images/shared/dark-logo.svg" 
            alt="pelstack" 
            width={180} 
            height={44} 
            className="hidden w-full dark:block" 
          />
        </figure>
      </Link>
    </div>
  );
};

export default Logo;

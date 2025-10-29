import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="hidden lg:block lg:max-w-[198px]">
          {/* Light mode logo */}
          <Image
            src="/images/shared/main-logo.svg"
            alt="pelstack"
            width={198}
            height={44}
            className="block dark:hidden"
          />
          {/* Dark mode logo */}
          <Image
            src="/images/shared/dark-logo.svg"
            alt="pelstack"
            width={198}
            height={44}
            className="hidden dark:block"
          />
        </figure>

        {/* mobile logo */}
        <figure className="block max-w-11 lg:hidden">
          <Image src="/images/shared/logo.svg" alt="pelstack" width={44} height={44} className="block w-full dark:hidden" />
          <Image src="/images/shared/logo-dark.svg" alt="pelstack" width={44} height={44} className="hidden w-full dark:block" />
        </figure>
      </Link>
    </div>
  );
};

export default Logo;

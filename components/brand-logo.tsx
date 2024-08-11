import Image from 'next/image';
import Link from 'next/link';

export const BrandLogo = () => {
  return (
    <Link href={'/'}>
      <Image
        height={40}
        width={40}
        src={'/assets/images/logo.PNG'}
        alt='Brand Logo'
      />
    </Link>
  );
};
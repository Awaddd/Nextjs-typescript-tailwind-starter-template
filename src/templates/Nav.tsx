import { ReactNode } from 'react';
// import Link from 'next/link';

const Nav = ({ meta }: { meta: ReactNode }) => (
  <div className="w-full antialiased">
    {meta}
    {/* <Link href="/">Home</Link>
    <Link href="/about">About</Link> */}
  </div>
);

export default Nav;

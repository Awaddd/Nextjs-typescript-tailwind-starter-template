import { ReactNode } from 'react';
import Link from 'next/link';

const Nav = ({ meta }: { meta: ReactNode }) => (
  <nav className="w-full antialiased" style={{ display: 'flex', gap: '14px' }}>
    {meta}
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
  </nav>
);

export default Nav;

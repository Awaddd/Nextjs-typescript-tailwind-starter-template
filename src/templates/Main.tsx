import { ReactNode } from 'react';
import Nav from '../layout/Nav'
import Footer from '../layout/Footer'
import { Meta } from '../layout/Meta';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const DefaultMeta = (
  <Meta
    title="Example Title"
    description="Description"
  />
);

const Main = ({ meta, children }: IMainProps) => (
  <div className="grid w-screen h-full min-h-screen antialiased app-grid font-inter">
    <Nav meta={meta || DefaultMeta} />
    <main className="py-5 text-xl">{children}</main>
    <Footer />
  </div>
);

export { Main };

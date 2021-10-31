import React, { ReactNode } from 'react';

import Nav from './Nav'
// import Footer from './Footer'

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
  <div className="w-full antialiased">
    <div className="max-w-screen-md mx-auto">
      <Nav meta={meta} />
      <div className="py-5 text-xl content">{children}</div>
      {/* <Footer /> */}
    </div>
  </div>
);

export { Main };

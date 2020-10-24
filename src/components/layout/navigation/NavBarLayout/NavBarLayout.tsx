import * as React from 'react';
import {NavBar} from '../NavBar/NavBar';

interface Props {
  children: React.ReactNode;
}

export const NavBarLayout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <NavBar />
      <div className="container pt-4">{props.children}</div>
    </>
  );
};

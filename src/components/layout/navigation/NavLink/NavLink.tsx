import * as React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  to: string;
}

export const NavLink: React.FC<Props> = (props: Props) => {
  return (
    <Link to={props.to} className="nav-link">
      {props.children}
    </Link>
  );
};

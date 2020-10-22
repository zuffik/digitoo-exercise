import * as React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  active?: boolean;
}

export const NavItem: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={classNames("nav-item", {
        active: props.active,
      })}
    >
      {props.children}
    </div>
  );
};

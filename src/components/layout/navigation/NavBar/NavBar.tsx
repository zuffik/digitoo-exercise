import * as React from 'react';
import {Logo} from '../../../elementary/Logo/Logo';
import {Routes} from '../../../../services/routes/Routes';
import {Link} from 'react-router-dom';
import {NavLink} from '../NavLink/NavLink';
import {useRouteExactMatch} from '../../../../services/routes/UseRouteExactMatch';
import {FaArrowRight} from 'react-icons/fa';
import {NavItem} from '../NavItem/NavItem';

interface Props {}

export const NavBar: React.FC<Props> = (props: Props) => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to={Routes.home()} className="navbar-brand">
          <Logo height={30} />
        </Link>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav mr-auto">
            <NavItem active={useRouteExactMatch(Routes.recentArticles())}>
              <NavLink to={Routes.recentArticles()}>Recent articles</NavLink>
            </NavItem>
            <NavItem active={useRouteExactMatch(Routes.about())}>
              <NavLink to={Routes.about()}>About</NavLink>
            </NavItem>
          </div>
        </div>
        <NavItem active={useRouteExactMatch(Routes.about())}>
          <NavLink to={Routes.login()}>
            Log in
            <FaArrowRight className="ml-1" size={12} />
          </NavLink>
        </NavItem>
      </div>
    </div>
  );
};

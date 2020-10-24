import * as React from 'react';
import {Logo} from '../../../elementary/Logo/Logo';
import {Routes} from '../../../../services/routes/Routes';
import {Link} from 'react-router-dom';
import {NavLink} from '../NavLink/NavLink';
import {useRouteExactMatch} from '../../../../services/routes/UseRouteExactMatch';
import {FaArrowRight} from 'react-icons/fa';
import {NavItem} from '../NavItem/NavItem';
import {Tenant} from "../../../../services/types/entity/Tenant";
import {Avatar} from "../../../elementary/Avatar/Avatar";
import classNames from 'classnames';

interface Props {
    user?: Tenant; // ?? really?
    onLogOut?: () => void;
}

export const NavBar: React.FC<Props> = (props: Props) => {
    const [dropdownOpen, setDropdownOpen] = React.useState<boolean>(false);
    const recentArticlesActive = useRouteExactMatch(Routes.recentArticles());
    const aboutActive = useRouteExactMatch(Routes.about());
    const loginActive = useRouteExactMatch(Routes.login());
    const myArticlesActive = useRouteExactMatch(Routes.articles.my());
    const createArticleActive = useRouteExactMatch(Routes.articles.create());
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to={Routes.home()} className="navbar-brand">
                    <Logo height={30}/>
                </Link>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav mr-auto">
                        <NavItem active={recentArticlesActive}>
                            <NavLink to={Routes.recentArticles()}>Recent articles</NavLink>
                        </NavItem>
                        <NavItem active={aboutActive}>
                            <NavLink to={Routes.about()}>About</NavLink>
                        </NavItem>
                    </div>
                </div>
                {
                    props.user
                        ? (
                            <>
                                <div className="navbar-nav">
                                    <NavItem active={myArticlesActive}>
                                        <NavLink to={Routes.articles.my()}>
                                            My Articles
                                        </NavLink>
                                    </NavItem>
                                </div>
                                <NavItem active={createArticleActive}>
                                    <NavLink to={Routes.articles.create()}>
                                        Create article
                                    </NavLink>
                                </NavItem>
                                <div className="nav-item dropdown">
                                    <button className="dropdown-toggle btn btn-link btn-sm" onClick={() => setDropdownOpen(val => !val)}>
                                        <Avatar src="https://picsum.photos/48/48" size={32}/>
                                    </button>
                                    <div className={classNames("dropdown-menu dropdown-menu-right", {show: dropdownOpen})} onClick={props.onLogOut}>
                                        <div className="dropdown-item">Log Out</div>
                                    </div>
                                </div>
                            </>
                        )
                        : (
                            <NavItem active={loginActive}>
                                <NavLink to={Routes.login()}>
                                    Log in
                                    <FaArrowRight className="ml-1" size={12}/>
                                </NavLink>
                            </NavItem>
                        )
                }
            </div>
        </div>
    );
};

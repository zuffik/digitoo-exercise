import * as React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {Routes} from "../../../../services/routes/Routes";
import {LandingPage} from "../../../pages/LandingPage/LandingPage";
import {ArticleDetailView} from "../../../pages/ArticleDetailView/ArticleDetailView";
import {LoginPage} from "../../../pages/LoginPage/LoginPage";
import {NavBarLayout} from "../../../layout/navigation/NavBarLayout/NavBarLayout";
import {StrictlyPublicRoute} from "../../../routes/StrictlyPublicRoute/StrictlyPublicRoute";
import {StrictlyPrivateRoute} from "../../../routes/StrictlyPrivateRoute/StrictlyPrivateRoute";
import {MyArticlesPage} from "../../../pages/MyArticlesPage/MyArticlesPage";
import {CreateArticlePage} from "../../../pages/CreateArticlePage/CreateArticlePage";

interface Props {
}

export const MainRouterLayout: React.FC<Props> = (props: Props) => {
    return (
        <NavBarLayout>
            <Switch>
                <Route path={Routes.home()} exact>
                    <LandingPage/>
                </Route>
                <StrictlyPublicRoute path={Routes.login()} exact>
                    <LoginPage/>
                </StrictlyPublicRoute>
                <StrictlyPrivateRoute path={Routes.articles.my()} exact>
                    <MyArticlesPage/>
                </StrictlyPrivateRoute>
                <StrictlyPrivateRoute path={Routes.articles.create()} exact>
                    <CreateArticlePage/>
                </StrictlyPrivateRoute>
                <Route path={Routes.articles.detail()} exact>
                    <ArticleDetailView/>
                </Route>
                <Redirect to={Routes.home()}/>
            </Switch>
        </NavBarLayout>
    );
};

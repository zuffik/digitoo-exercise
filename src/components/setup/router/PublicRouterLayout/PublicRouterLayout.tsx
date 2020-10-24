import * as React from 'react';
import {NavBarLayout} from '../../../layout/navigation/NavBarLayout/NavBarLayout';
import {Route, Switch} from 'react-router';
import {Routes} from '../../../../services/routes/Routes';
import {LandingPage} from '../../../pages/LandingPage/LandingPage';
import {ArticleDetailView} from '../../../pages/ArticleDetailView/ArticleDetailView';

interface Props {}

export const PublicRouterLayout: React.FC<Props> = (props: Props) => {
  return (
    <NavBarLayout>
      <Switch>
        <Route path={Routes.home()} exact>
          <LandingPage />
        </Route>
        <Route path={Routes.articleDetail()} exact>
          <ArticleDetailView />
        </Route>
      </Switch>
    </NavBarLayout>
  );
};

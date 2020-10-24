import * as React from 'react';
import './App.sass';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from '../../../services/store/Store';
import {MainRouterLayout} from '../router/MainRouterLayout/MainRouterLayout';

interface Props {}

const store = createStore();

export const App: React.FC<Props> = (props: Props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRouterLayout />
      </BrowserRouter>
    </Provider>
  );
};

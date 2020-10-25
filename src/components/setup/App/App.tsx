import * as React from 'react';
import './App.sass';
import {BrowserRouter} from 'react-router-dom';
import {MainRouterLayout} from '../router/MainRouterLayout/MainRouterLayout';
import {AuthProvider} from "../../auth/AuthContext/AuthContext";

interface Props {
}

export const App: React.FC<Props> = (props: Props) => {
    return (
        <AuthProvider tenantId={process.env.REACT_APP_TENANT_ID!}>
            <BrowserRouter>
                <MainRouterLayout/>
            </BrowserRouter>
        </AuthProvider>
    );
};

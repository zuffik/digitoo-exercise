import * as React from 'react';
import {Redirect, Route, RouteProps} from "react-router";
import {Routes} from "../../../services/routes/Routes";
import {useAccessToken} from "../../auth/AuthContext/AuthContext";

interface Props extends RouteProps {
}

export const StrictlyPublicRoute: React.FC<Props> = (props: Props) => {
    const accessToken = useAccessToken();
    if (accessToken) {
        return <Redirect to={Routes.home()}/>;
    }
    return (
        <Route {...props}/>
    );
};

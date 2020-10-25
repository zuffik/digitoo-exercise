import * as React from 'react';
import {NavBar} from '../NavBar/NavBar';
import {useAccessToken, useSaveAccessToken} from "../../../auth/AuthContext/AuthContext";

interface Props {
    children: React.ReactNode;
}

export const NavBarLayout: React.FC<Props> = (props: Props) => {
    const accessToken = useAccessToken();
    const setAccessToken = useSaveAccessToken();
    const logout = () => setAccessToken(undefined);
    return (
        <>
            <NavBar accessToken={accessToken} onLogOut={logout}/>
            <div className="container py-4">{props.children}</div>
        </>
    );
};

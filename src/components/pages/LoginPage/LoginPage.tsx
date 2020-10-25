import * as React from 'react';
import {LoginForm} from "../../auth/LoginForm/LoginForm";
import {LoginCredentials} from "../../../services/types/dto/LoginCredentials";
import {AccessToken} from "../../../services/types/entity/AccessToken";
import {useSaveAccessToken} from "../../auth/AuthContext/AuthContext";
import {defaultHttpState, HttpState} from "../../../services/types/HttpState";
import {handleHttpPromise} from "../../../services/http/HttpPromise";
import {httpClient} from "../../../services/http/HttpClient";

interface Props {
}

export const LoginPage: React.FC<Props> = (props: Props) => {
    const [login, setLogin] = React.useState<HttpState<AccessToken>>(defaultHttpState);
    const setAccessToken = useSaveAccessToken();
    const onLogin = (data: LoginCredentials) => handleHttpPromise(httpClient.post('/login', data), setLogin, (response) => {
        setAccessToken(response.data);
    });
    return (
        <LoginForm onLogin={onLogin} loading={login.loading} error={!!login.error}/>
    );
};

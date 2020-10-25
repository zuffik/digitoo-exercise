import * as React from 'react';
import {Tenant} from "../../../services/types/entity/Tenant";
import {CenteredSpinner} from "../../elementary/progress/CenteredSpinner/CenteredSpinner";
import {Alert} from "../../elementary/Alert/Alert";
import {AccessToken} from "../../../services/types/entity/AccessToken";
import {storage} from "../../../services/wrappers/LocalStorage";
import {defaultHttpState, HttpState} from "../../../services/types/HttpState";
import {handleHttpPromise} from "../../../services/http/HttpPromise";
import {httpClient} from "../../../services/http/HttpClient";

export interface AuthContext {
    tenant: Tenant;
    accessToken?: AccessToken;
    setAccessToken: (accessToken?: AccessToken) => void;
}

const ctx = React.createContext<AuthContext>({} as AuthContext);

interface Props {
    children: React.ReactNode;
    tenantId: string;
}

export const AuthProvider: React.FC<Props> = (props: Props) => {
    const auth = storage.getItem('auth', {});
    const [accessToken, accessTokenSetter] = React.useState(auth.accessToken);
    const [tenant, setTenant] = React.useState<HttpState<Tenant>>(defaultHttpState(auth.tenant));
    React.useEffect(() => {
        handleHttpPromise(httpClient.get(`/tenants/${props.tenantId}`), setTenant);
    }, [props.tenantId]);

    const {Provider} = ctx;

    React.useEffect(() => {
        storage.setItem('auth', {...storage.getItem('auth', {}), tenant: tenant.data!});
    }, [tenant]);

    const setAccessToken = (accessToken?: AccessToken) => {
        storage.setItem('auth', {...storage.getItem('auth', {}), accessToken});
        accessTokenSetter(accessToken);
    }

    return (
        <Provider value={{tenant: tenant.data!, accessToken, setAccessToken}}>
            {
                !tenant.data
                    ? (
                        <div className="my-5">
                            <CenteredSpinner/>
                        </div>
                    )
                    : tenant.error
                    ? <Alert type="danger">{tenant.error.message}</Alert>
                    : props.children
            }
        </Provider>
    );
};

export const useAuthContext = (): AuthContext => React.useContext<AuthContext>(ctx);
export const useTenant = (): Tenant => useAuthContext().tenant;
export const useAccessToken = (): AccessToken | undefined => useAuthContext().accessToken;
export const useSaveAccessToken = (): AuthContext['setAccessToken'] => useAuthContext().setAccessToken;

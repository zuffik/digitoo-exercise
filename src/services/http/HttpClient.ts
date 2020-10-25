import axios, {AxiosError, AxiosInstance} from 'axios';
import {storage} from "../wrappers/LocalStorage";

export const createHttpClient = (): AxiosInstance => {
    const auth = storage.getItem('auth', {});
    const client = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        responseType: 'json',
        headers: {
            'X-API-KEY': process.env.REACT_APP_API_KEY,
            ...auth.accessToken && {'Authorization': `${auth.accessToken.token_type} ${auth.accessToken.access_token}`}
        },
    });
    client.interceptors.response.use(undefined, (e: AxiosError) => {
        if (e.response?.status === 401) {
            // just logout the user unless you want to keep credentials in storage
            storage.setItem('auth', {...auth, accessToken: undefined});
        }
        throw e;
    });
    return client;
};

export const httpClient: AxiosInstance = createHttpClient();

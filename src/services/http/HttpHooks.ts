import {makeUseAxios, Options} from 'axios-hooks';
import {httpClient} from './HttpClient';
import {AxiosRequestConfig} from 'axios';

export const useAxios = makeUseAxios({cache: undefined, axios: httpClient});
export const useGet = <T>(url: string, config?: Omit<AxiosRequestConfig, 'method' | 'url'>, opts?: Options) =>
    useAxios<T>({
        ...config,
        method: 'get',
        url,
    });
export const usePost = <T>(
    url: string,
    config?: Omit<AxiosRequestConfig, 'method' | 'url'>,
    opts?: Options
) =>
    useAxios<T>({
        ...config,
        method: 'post',
        url,
    });

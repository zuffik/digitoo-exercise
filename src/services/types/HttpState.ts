import {AxiosError} from "axios";

export interface HttpState<T> {
    error?: AxiosError;
    loading: boolean;
    data?: T;
}

export const defaultHttpState = <T>(data?: T): HttpState<T> => ({
    error: undefined,
    loading: false,
    data
})

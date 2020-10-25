import {AxiosPromise, AxiosResponse} from "axios";
import {HttpState} from "../types/HttpState";
import {update} from "../wrappers/Update";

export const handleHttpPromise = <T>(promise: AxiosPromise<T>, setter: (state: (state: HttpState<T>) => HttpState<T>) => void, successCallback?: (response: AxiosResponse<T>) => void) => {
    setter(article => update(article, {loading: {$set: true}}))
    promise
        .then(response => {
            setter(article => update(article, {$set: {loading: false, data: response.data}}))
            successCallback?.(response);
        })
        .catch(error => setter(article => update(article, {$set: {loading: false, error}})));
}

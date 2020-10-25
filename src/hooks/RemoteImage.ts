import {useIsStorybook} from "../components/storybook/StorybookContext";
import * as React from "react";
import {AxiosError} from "axios";
import {defaultHttpState, HttpState} from "../services/types/HttpState";
import {handleHttpPromise} from "../services/http/HttpPromise";
import {httpClient} from "../services/http/HttpClient";

export const useFetchRemoteImage = (imageId?: string): [{ data?: Blob, error?: AxiosError, loading: boolean }, File | undefined] | [{data: undefined, error: undefined, loading: false}, undefined] => {
    const isStorybook = useIsStorybook();

    const [state, setState] = React.useState<HttpState<Blob>>(defaultHttpState());
    React.useEffect(() => {
        if (imageId && !isStorybook) {
            handleHttpPromise(httpClient.get(`/images/${imageId}`), setState);
        }
    }, [imageId, isStorybook]);

    const image = React.useMemo<File | undefined>(() => state.data && new File([state.data], 'image.' + state.data.type.split('/')[1], {type: state.data.type}), [state.data]);
    return [state, image];
}

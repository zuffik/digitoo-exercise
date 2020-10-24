import {useIsStorybook} from "../components/storybook/StorybookContext";
import * as React from "react";
import {useGet} from "./Http";
import {AxiosError} from "axios";

export const useFetchRemoteImage = (imageId?: string): [{ data: Blob, error?: AxiosError, loading: boolean }, File] | [{data: undefined, error: undefined, loading: false}, undefined] => {
    const isStorybook = useIsStorybook();
    const [{data, error, loading}, fetchImage] = useGet<Blob>(`/images/${imageId}`, {
        responseType: 'blob',
    }, {manual: true});
    const image = React.useMemo<File>(() => data && new File([data], 'image.' + data.type.split('/')[1], {type: data.type}), [data]);
    if (!imageId || isStorybook) {
        return [{data: undefined, error: undefined, loading: false}, undefined];
    } else {
        fetchImage();
    }
    return [{data, error, loading}, image];
}

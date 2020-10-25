import * as React from 'react';
import {Warning} from '../Warning/Warning';
import {useIsStorybook} from "../../storybook/StorybookContext";
import {FileImage} from "../FileImage/FileImage";
import {useFetchRemoteImage} from "../../../hooks/RemoteImage";
import {CenteredSpinner} from "../progress/CenteredSpinner/CenteredSpinner";

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
    imageId: string;
}

export const RemoteImage: React.FC<Props> = (props: Props) => {
    const isStorybook = useIsStorybook();
    const [{error, loading}, image] = useFetchRemoteImage(props.imageId)!;

    if (isStorybook) {
        return <img alt="random" src="https://picsum.photos/200/200"/>;
    }
    const {imageId, ...rest} = props;

    if (!imageId) return <img alt="placeholder" src="https://via.placeholder.com/500x200"/>
    if (loading || !image) return <CenteredSpinner/>;
    if (error) return <Warning/>;
    return <FileImage {...rest} file={image}/>;
};

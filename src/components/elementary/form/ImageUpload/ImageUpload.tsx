import * as React from 'react';
import {FileImage} from "../../FileImage/FileImage";
import styles from './ImageUpload.module.sass';
import {useFetchRemoteImage} from "../../../../hooks/RemoteImage";
import {useIsStorybook} from "../../../storybook/StorybookContext";
import {usePost} from "../../../../hooks/Http";
import {ImageInfo} from "../../../../services/types/entity/ImageInfo";
import {Spinner} from "../../progress/Spinner/Spinner";

interface Props {
    existingImageId?: string;
    onUploadFinished?: (image: ImageInfo, file: File) => void;
}

export const ImageUpload: React.FC<Props> = ({existingImageId, onUploadFinished, ...props}: Props) => {
    const [file, setFile] = React.useState<File | undefined>(undefined);
    const [, image] = useFetchRemoteImage(existingImageId) || [];
    const isStorybook = useIsStorybook();
    const [{loading, data, error}, uploadImage] = usePost<ImageInfo>(`/images`, {}, {manual: true});
    React.useEffect(() => {
        if (data && !loading && !error && file) {
            onUploadFinished?.(data, file);
        }
    }, [loading, data, error, onUploadFinished, file]);
    React.useEffect(() => {
        if (image) {
            setFile(image);
        }
    }, [image]);
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFile(file);
        if (!isStorybook) {
            const fd = new FormData();
            fd.append('image', file as Blob);
            uploadImage({
                headers: {
                    'Content-Type': undefined
                }
            });
        }
        e.target.value = '';
    };

    return (
        <>
            {
                !file
                    ? <label htmlFor="upload" className="btn btn-secondary">Upload an Image</label>
                    : (
                        <>
                            <FileImage file={file}/>
                            <div className="d-flex flex-row align-items-center mt-3">
                                <label htmlFor="upload" className="text-primary m-0">Upload new</label>
                                <span className="text-muted mx-2"> | </span>
                                <button className={styles.delete} onClick={() => setFile(undefined)}>Delete</button>
                            </div>
                        </>
                    )
            }
            <input type="file" className="d-none" id="upload" onChange={onFileChange}/>
            {loading && <Spinner size={16}/>}
        </>
    );
};

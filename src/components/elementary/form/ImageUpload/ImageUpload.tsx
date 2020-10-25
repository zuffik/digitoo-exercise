import * as React from 'react';
import {FileImage} from "../../FileImage/FileImage";
import styles from './ImageUpload.module.sass';
import {useIsStorybook} from "../../../storybook/StorybookContext";
import {ImageInfo} from "../../../../services/types/entity/ImageInfo";
import {Spinner} from "../../progress/Spinner/Spinner";
import {defaultHttpState, HttpState} from "../../../../services/types/HttpState";
import {handleHttpPromise} from "../../../../services/http/HttpPromise";
import {httpClient} from "../../../../services/http/HttpClient";

interface Props {
    imageId?: string;
    onUploadFinished?: (image: ImageInfo) => void;
}

export const ImageUpload: React.FC<Props> = ({onUploadFinished, ...props}: Props) => {
    const [file, setFile] = React.useState<undefined | File>();
    const [uploading, setUploading] = React.useState<HttpState<ImageInfo[]>>(defaultHttpState);
    const isStorybook = useIsStorybook();

    const onRemoveImage = () => {
        // 405: not allowed on freshly created image
        // DELETE `/images/${imageId}`
        setFile(undefined);
    }
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (!isStorybook) {
            // upload new image
            const fd = new FormData();
            fd.append('image', f as Blob);
            handleHttpPromise(httpClient.post(`/images`, fd), setUploading, response => {
                onUploadFinished?.(response.data[0]);
            });
        }
        setFile(f);
        e.target.value = '';
    };
    return (
        <>
            {
                !file
                    ? <label htmlFor="upload" data-testid="image-upload-large" className="btn btn-secondary">Upload an Image</label>
                    : (
                        <>
                            <FileImage data-testid="image-upload-img" file={file}/>
                            <div className="d-flex flex-row align-items-center mt-3">
                                <label htmlFor="upload" data-testid="image-upload-small" className="text-primary m-0">Upload new</label>
                                <span className="text-muted mx-2"> | </span>
                                <button className={styles.delete} onClick={onRemoveImage} data-testid="image-upload-remove">Delete</button>
                            </div>
                        </>
                    )
            }
            <input type="file" className="d-none" id="upload" data-testid="image-upload-input" onChange={onFileChange}/>
            {uploading.loading && <Spinner data-testid="image-upload-spinner" size={16}/>}
        </>
    );
};

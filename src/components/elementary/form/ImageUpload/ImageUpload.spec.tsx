import * as React from 'react';
import {fireEvent, render} from '@testing-library/react'
import {ImageUpload} from "./ImageUpload";
import {httpClient} from "../../../../services/http/HttpClient";
import {ImageInfo} from "../../../../services/types/entity/ImageInfo";

describe('<ImageUpload/>', () => {
    it('should upload image', () => {
        const onUploadFinished = jest.fn();
        URL.createObjectURL = jest.fn(() =>'source')
        const spyUpload = jest.spyOn(httpClient, 'post').mockImplementation(jest.fn(async () => [{
            name: 'name',
            imageId: '123'
        } as ImageInfo]))
        const {asFragment, getByTestId} = render(<ImageUpload onUploadFinished={onUploadFinished}/>);
        expect(getByTestId('image-upload-large')).toBeInTheDOM();
        const file = new File([], 'image.png', {type: 'image/png'});
        fireEvent.change(getByTestId('image-upload-input'), {
            target: {
                files: [file]
            }
        });
        expect(spyUpload).toHaveBeenCalledWith('/images', expect.any(FormData));
        expect(getByTestId('image-upload-small')).toBeInTheDOM();
        expect(getByTestId('image-upload-img')).toBeInTheDOM();
        expect(asFragment()).toMatchSnapshot();
    });
    it('should upload image and remove it', () => {
        const onUploadFinished = jest.fn();
        URL.createObjectURL = jest.fn(() =>'source')
        const spyUpload = jest.spyOn(httpClient, 'post').mockImplementation(jest.fn(async () => [{
            name: 'name',
            imageId: '123'
        } as ImageInfo]))
        const {asFragment, getByTestId, queryByTestId} = render(<ImageUpload onUploadFinished={onUploadFinished}/>);
        const file = new File([], 'image.png', {type: 'image/png'});
        fireEvent.change(getByTestId('image-upload-input'), {
            target: {
                files: [file]
            }
        });
        expect(spyUpload).toHaveBeenCalledWith('/images', expect.any(FormData));
        fireEvent.click(getByTestId('image-upload-remove'));
        expect(getByTestId('image-upload-large')).toBeInTheDOM();
        expect(queryByTestId('image-upload-remove')).toBeNull();
        expect(queryByTestId('image-upload-small')).toBeNull();
        expect(queryByTestId('image-upload-img')).toBeNull();
        expect(asFragment()).toMatchSnapshot();
    });
});

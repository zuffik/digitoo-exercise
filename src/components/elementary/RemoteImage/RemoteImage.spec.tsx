import * as React from 'react';
import {render, waitForElementToBeRemoved} from '@testing-library/react'
import {RemoteImage} from "./RemoteImage";
import {httpClient} from "../../../services/http/HttpClient";
import {ImageInfo} from "../../../services/types/entity/ImageInfo";

describe('<RemoteImage/>', () => {
    it('should render with placeholder', () => {
        const {asFragment, getByAltText} = render(<RemoteImage imageId={undefined as unknown as string}/>);
        expect(getByAltText('placeholder')).toBeInTheDOM();
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render spinner', () => {
        URL.createObjectURL = jest.fn(() => 'source');
        const spyGet = jest.spyOn(httpClient, 'get').mockImplementation(jest.fn(async (): Promise<{ data: Blob }> => ({data: new Blob([])})));
        const {asFragment, queryByAltText, getByTestId} = render(<RemoteImage imageId="123"/>);
        expect(queryByAltText('placeholder')).toBeNull();
        expect(spyGet).toBeCalledWith('/images/123');
        expect(getByTestId('remote-image-spinner')).toBeInTheDOM();
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render warning icon', async () => {
        URL.createObjectURL = jest.fn(() => 'source');
        const spyGet = jest.spyOn(httpClient, 'get').mockImplementation(jest.fn(async (): Promise<ImageInfo> => {
            throw new Error()
        }));
        const {asFragment, queryByAltText, queryByTestId, getByTestId} = render(<RemoteImage imageId="123"/>);
        expect(queryByAltText('placeholder')).toBeNull();
        expect(spyGet).toBeCalledWith('/images/123');
        await waitForElementToBeRemoved(queryByTestId('remote-image-spinner'));
        expect(getByTestId('remote-image-warning')).toBeInTheDOM();
        expect(queryByTestId('remote-image-img')).toBeNull();
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render actual image', async () => {
        URL.createObjectURL = jest.fn(() => 'source');
        const spyGet = jest.spyOn(httpClient, 'get').mockImplementation(jest.fn(async (): Promise<{ data: Blob }> => ({data: new Blob([])})));
        const {asFragment, queryByAltText, getByTestId, queryByTestId} = render(<RemoteImage imageId="123"/>);
        expect(queryByAltText('placeholder')).toBeNull();
        expect(spyGet).toBeCalledWith('/images/123');
        await waitForElementToBeRemoved(queryByTestId('remote-image-spinner'));
        expect(getByTestId('remote-image-img')).toHaveAttribute('src', 'source');
        expect(queryByTestId('remote-image-warning')).toBeNull();
        expect(asFragment()).toMatchSnapshot();
    });
});

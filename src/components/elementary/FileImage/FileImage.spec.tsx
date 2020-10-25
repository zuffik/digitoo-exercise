import * as React from 'react';
import {render} from '@testing-library/react'
import {FileImage} from "./FileImage";

describe('<FileImage/>', () => {
    it('should render', () => {
        URL.createObjectURL = jest.fn(() => 'source');
        const spy = jest.spyOn(URL, 'createObjectURL');
        const file = new File([], 'image.png', {type: 'image/png'});
        const {asFragment, getByAltText} = render(<FileImage file={file} alt="id"/>);
        expect(getByAltText('id')).toHaveAttribute('src', 'source');
        expect(spy).toHaveBeenCalledWith(file);
        expect(asFragment()).toMatchSnapshot();
    });
});

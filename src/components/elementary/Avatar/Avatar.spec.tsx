import * as React from 'react';
import {render} from '@testing-library/react'
import {Avatar} from "./Avatar";

describe('<Avatar/>', () => {
    it('should render', () => {
        const {asFragment, getByAltText} = render(<Avatar alt="id" src="image.png"/>);
        expect(getByAltText('id')).toBeInTheDOM();
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render with specific size', () => {
        const {asFragment, getByAltText} = render(<Avatar size={50} alt="id" src="image.png"/>);
        expect(getByAltText('id')).toHaveAttribute('width', '50');
        expect(getByAltText('id')).toHaveAttribute('height', '50');
        expect(asFragment()).toMatchSnapshot();
    });
});

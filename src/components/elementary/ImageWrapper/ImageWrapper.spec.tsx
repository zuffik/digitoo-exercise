import * as React from 'react';
import {render} from '@testing-library/react'
import {ImageWrapper} from "./ImageWrapper";

describe('<ImageWrapper/>', () => {
    it('should render', () => {
        const {asFragment, getByTestId} = render(<ImageWrapper height={234}><img/></ImageWrapper>);
        expect(getByTestId('image-wrapper')).toHaveStyle('height:234px');
        expect(asFragment()).toMatchSnapshot();
    });
});

import * as React from 'react';
import {render} from '@testing-library/react'
import {Logo} from "./Logo";

describe('<Logo/>', () => {
    it('should render', () => {
        const {asFragment} = render(<Logo/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

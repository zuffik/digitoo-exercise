import * as React from 'react';
import {render} from '@testing-library/react'
import {IconButton} from "./IconButton";

describe('<IconButton/>', () => {
    it('should render', () => {
        const {asFragment} = render(<IconButton/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

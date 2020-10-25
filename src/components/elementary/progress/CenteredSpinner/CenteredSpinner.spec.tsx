import * as React from 'react';
import {render} from '@testing-library/react'
import {CenteredSpinner} from "./CenteredSpinner";

describe('<CenteredSpinner/>', () => {
    it('should render', () => {
        const {asFragment} = render(<CenteredSpinner/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

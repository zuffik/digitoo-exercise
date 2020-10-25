import * as React from 'react';
import {render} from '@testing-library/react'
import {Warning} from "./Warning";

describe('<Warning/>', () => {
    it('should render', () => {
        const {asFragment} = render(<Warning/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

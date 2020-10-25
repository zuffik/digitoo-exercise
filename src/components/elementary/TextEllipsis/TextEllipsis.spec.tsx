import * as React from 'react';
import {render} from '@testing-library/react'
import {TextEllipsis} from "./TextEllipsis";

describe('<TextEllipsis/>', () => {
    it('should render', () => {
        const {asFragment} = render(<TextEllipsis/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

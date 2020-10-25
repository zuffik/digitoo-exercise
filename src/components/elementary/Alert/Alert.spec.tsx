import * as React from 'react';
import {render} from '@testing-library/react'
import {Alert} from "./Alert";

describe('<Alert/>', () => {
    it('should have alert classes', () => {
        const {asFragment, getByText} = render(<Alert type="danger">alert content</Alert>);
        expect(getByText('alert content')).toHaveClass('alert alert-danger');
        expect(asFragment()).toMatchSnapshot();
    });
});

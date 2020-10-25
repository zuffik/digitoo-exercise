import * as React from 'react';
import {render} from '@testing-library/react'
import {Button} from "./Button";

describe('<Button/>', () => {
    it('should render', () => {
        const {asFragment, getByTestId} = render(<Button color="primary"/>);
        expect(getByTestId('btn')).toHaveClass("btn");
        expect(getByTestId('btn-label').className).not.toMatch(/innerHidden/);
        expect(getByTestId('btn-spinner').className).not.toMatch(/spinnerVisible/);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render with spinner', () => {
        const {asFragment, getByTestId} = render(<Button color="primary" loading/>);
        expect(getByTestId('btn')).toHaveClass("btn");
        expect(getByTestId('btn-label').className).toMatch(/innerHidden/);
        expect(getByTestId('btn-spinner').className).toMatch(/spinnerVisible/);
        expect(asFragment()).toMatchSnapshot();
    });
});

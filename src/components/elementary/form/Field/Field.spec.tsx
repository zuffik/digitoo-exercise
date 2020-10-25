import * as React from 'react';
import {render} from '@testing-library/react'
import {Field} from "./Field";
import {Formik} from "formik";

describe('<Field/>', () => {
    it('should render', () => {
        const {asFragment, getByTestId, queryAllByText} = render(
            <Formik initialValues={{}} onSubmit={jest.fn()}>
                <Field label="Label"/>
            </Formik>
        );
        expect(queryAllByText('Label')).toHaveLength(1);
        expect(getByTestId('field-input').className).not.toMatch(/(is-valid|is-invalid)/);
        expect(getByTestId('field-helper-text')).toHaveTextContent('');
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render with error', () => {
        const {asFragment, getByTestId, queryAllByText} = render(
            <Formik initialValues={{}} onSubmit={jest.fn()}>
                <Field label="Label" error="Error" touched/>
            </Formik>
        );
        expect(queryAllByText('Label')).toHaveLength(1);
        expect(getByTestId('field-input').className).toMatch(/is-invalid/);
        expect(getByTestId('field-helper-text')).toHaveTextContent('Error');
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render with success', () => {
        const {asFragment, getByTestId, queryAllByText} = render(
            <Formik initialValues={{}} onSubmit={jest.fn()}>
                <Field label="Label" touched/>
            </Formik>
        );
        expect(queryAllByText('Label')).toHaveLength(1);
        expect(getByTestId('field-input').className).toMatch(/is-valid/);
        expect(getByTestId('field-helper-text')).toHaveTextContent('');
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render without label', () => {
        const {asFragment, getByTestId, queryAllByText} = render(
            <Formik initialValues={{}} onSubmit={jest.fn()}>
                <Field label="Label" disableLabel/>
            </Formik>
        );
        expect(queryAllByText('Label')).toHaveLength(0);
        expect(getByTestId('field-input').className).not.toMatch(/(is-valid|is-invalid)/);
        expect(getByTestId('field-helper-text')).toHaveTextContent('');
        expect(asFragment()).toMatchSnapshot();
    });
});

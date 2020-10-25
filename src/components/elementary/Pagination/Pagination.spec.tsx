import * as React from 'react';
import {render} from '@testing-library/react'
import {Pagination} from "./Pagination";

describe('<Pagination/>', () => {
    it('should render', () => {
        const {asFragment} = render(<Pagination onOffsetChange={jest.fn()} pagination={{limit:10, offset: 0, total: 100}}/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

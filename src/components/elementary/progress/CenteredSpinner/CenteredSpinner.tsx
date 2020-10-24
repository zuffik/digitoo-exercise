import * as React from 'react';
import {Spinner} from '../Spinner/Spinner';

interface Props {}

export const CenteredSpinner: React.FC<Props> = (props: Props) => {
    return (
        <div className="d-flex justify-content-center">
            <Spinner />
        </div>
    );
};

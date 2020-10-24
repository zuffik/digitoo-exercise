import * as React from 'react';
import {PublicRouterLayout} from '../PublicRouterLayout/PublicRouterLayout';

interface Props {}

export const MainRouterLayout: React.FC<Props> = (props: Props) => {
    return (
        <>
            <PublicRouterLayout />
        </>
    );
};

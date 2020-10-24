import {useRouteMatch} from 'react-router';

export const useRouteExactMatch = (path: string) =>
    !!useRouteMatch({
        exact: true,
        path,
    });

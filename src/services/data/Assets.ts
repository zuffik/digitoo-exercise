import * as React from 'react';

import {default as LogoSrc, ReactComponent as LogoComponent} from '../../static/img/logo.svg';

export type SvgAsset = {
    source: string;
    component: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {title?: string}>;
};

export class Assets {
    public static readonly logo: SvgAsset = {
        component: LogoComponent,
        source: LogoSrc,
    };
}

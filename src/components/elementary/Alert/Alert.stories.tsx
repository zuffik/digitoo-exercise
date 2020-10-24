import * as React from 'react';
import {Alert} from './Alert';

export default {
    title: 'Elementary/Alert',
};

export const danger = () => <Alert type="danger">Alert text</Alert>;
export const success = () => <Alert type="success">Alert text</Alert>;
export const warning = () => <Alert type="warning">Alert text</Alert>;

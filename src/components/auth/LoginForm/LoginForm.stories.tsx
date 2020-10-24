import * as React from 'react';
import {LoginForm} from './LoginForm';
import {action} from '@storybook/addon-actions';
import {boolean} from '@storybook/addon-knobs';

export default {
    title: 'Auth',
};

export const loginForm = () => (
    <LoginForm
        onLogin={action('onLogin')}
        loading={boolean('loading', false)}
        error={boolean('error', false)}
    />
);

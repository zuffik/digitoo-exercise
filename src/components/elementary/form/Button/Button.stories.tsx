import * as React from 'react';
import {Button} from './Button';
import {boolean, select} from '@storybook/addon-knobs';

export default {
    title: 'Elementary/Form',
};

export const button = () => (
    <Button
        color={select(
            'color',
            {
                primary: 'primary',
                secondary: 'secondary',
                success: 'success',
                danger: 'danger',
                warning: 'warning',
                info: 'info',
                light: 'light',
                dark: 'dark',
            },
            'primary'
        )}
        loading={boolean('loading', false)}
    >
        Button text
    </Button>
);

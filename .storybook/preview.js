import '../src/components/setup/App/App.sass';
import {addDecorator} from '@storybook/react';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter());

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
}


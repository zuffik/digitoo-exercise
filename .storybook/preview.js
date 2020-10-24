import * as React from 'react';

import '../src/components/setup/App/App.sass';
import {addDecorator} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import {StorybookContextProvider} from "../src/components/storybook/StorybookContext";

addDecorator(StoryRouter());
addDecorator((storyFn) => (
    <StorybookContextProvider>{storyFn()}</StorybookContextProvider>
))

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
}


import * as React from 'react';
import {HeadingButtonContent} from './HeadingButtonContent';
import {boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Layout',
};

export const headingButtonContent = () => (
  <HeadingButtonContent
    heading={text('heading', 'Heading')}
    buttonText={text('buttonText', 'Action')}
    loading={boolean('loading', false)}
    onButtonClick={action('onButtonClick')}
  >
    {text('children', 'Main value')}
  </HeadingButtonContent>
);

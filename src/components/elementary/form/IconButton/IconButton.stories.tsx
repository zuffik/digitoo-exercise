import * as React from 'react';
import {FaPen} from 'react-icons/fa';
import {IconButton} from './IconButton';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Elementary/Form',
};

export const iconButton = () => (
  <IconButton onClick={action('onClick')}>
    <FaPen />
  </IconButton>
);

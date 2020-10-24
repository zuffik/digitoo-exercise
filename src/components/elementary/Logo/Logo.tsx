import * as React from 'react';
import {Assets} from '../../../services/data/Assets';
import styles from './Logo.module.sass';

type Props = React.SVGProps<SVGSVGElement> & {
  title?: string;
};

export const Logo: React.FC<Props> = (props: Props) => {
  const Component = Assets.logo.component;
  return <Component {...props} className={styles.logo} />;
};

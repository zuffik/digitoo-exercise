import * as React from 'react';

interface Props {
  type: 'danger' | 'success' | 'warning';
  children: React.ReactNode;
}

export const Alert: React.FC<Props> = (props: Props) => {
  return <div className={`alert alert-${props.type}`}>{props.children}</div>;
};

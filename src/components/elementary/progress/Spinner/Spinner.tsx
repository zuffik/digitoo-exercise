import * as React from 'react';

interface Props {
  size?: number;
}

export const Spinner: React.FC<Props> = (props: Props) => {
  const size = props.size || 48;
  return <div className="spinner-border" style={{width: size + 'px', height: size + 'px'}} />;
};

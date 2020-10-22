import * as React from "react";

interface Props {
  children?: React.ReactNode;
  title: React.ReactText;
  perex: React.ReactText;
  heading?: 1 | 2 | 3 | 4 | 5;
}

export const ArticleMiniature: React.FC<Props> = (props: Props) => {
  const heading = props.heading || 4;
  return (
    <>
      {React.createElement('h' + heading, {className: 'mb-1'}, props.title)}
      {props.children}
      <p className="pt-1">{props.perex}</p>
    </>
  );
};

import * as React from "react";
import classNames from "classnames";
import styles from "./Avatar.module.sass";

interface Props
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> {
  size?: number;
}

export const Avatar: React.FC<Props> = (props: Props) => {
  const size = props.size || 48;
  return (
    <img
      {...props}
      alt={props.alt}
      className={classNames(props.className, styles.avatar)}
      width={size}
      height={size}
    />
  );
};

import * as React from "react";
import styles from "./VoteControls.module.sass";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import classNames from "classnames";

interface Props {
  score: number;

  onUpVote: () => void;
  onDownVote: () => void;
}

export const VoteControls: React.FC<Props> = (props: Props) => {
  return (
    <div className="d-flex flex-row">
      <div className={styles.box}>{(props.score >= 0 ? '+' : '-') + Math.abs(props.score)}</div>
      <button className={classNames(styles.box, styles.boxWithIcon)}>
        <FaAngleUp />
      </button>
      <button className={classNames(styles.box, styles.boxWithIcon)}>
        <FaAngleDown />
      </button>
    </div>
  );
};

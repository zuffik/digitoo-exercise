import * as React from "react";
import { Avatar } from "../../../elementary/Avatar/Avatar";
import { Comment } from "../../../../services/types/entity/Comment";
import moment from "moment";
import styles from "./CommentListItem.module.sass";
import { VoteControls } from "../../votes/VoteControls/VoteControls";

interface Props {
  comment: Comment;
}

export const CommentListItem: React.FC<Props> = (props: Props) => {
  const onUpVote = () => {};
  const onDownVote = () => {};

  return (
    <div className="d-flex flex-row mb-4">
      {/*no avatar?*/}
      <Avatar src="https://picsum.photos/48" className="mr-3" />
      <div className="flex-grow-1">
        <div className="d-flex flex-row align-items-center">
          <span className={styles.author}>{props.comment.author}</span>
          <span className={styles.datePosted}>
            {moment(props.comment.postedAt).fromNow()}
          </span>
        </div>
        <p className={styles.content}>{props.comment.content}</p>
        <VoteControls
          score={props.comment.score}
          onUpVote={onUpVote}
          onDownVote={onDownVote}
        />
      </div>
    </div>
  );
};

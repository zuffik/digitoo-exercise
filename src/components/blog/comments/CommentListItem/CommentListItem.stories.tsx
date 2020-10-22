import * as React from "react";
import { CommentListItem } from "./CommentListItem";
import {comment as cmt} from "../../../../services/data/random/Comment";
import {action} from "@storybook/addon-actions";

export default {
  title: "Blog/Comments",
};

export const comment = () => (
  <CommentListItem comment={cmt()} onDownVote={action('onDownVote')} onUpVote={action('onUpVote')}/>
);

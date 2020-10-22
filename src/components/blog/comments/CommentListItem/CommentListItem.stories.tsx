import * as React from "react";
import { CommentListItem } from "./CommentListItem";

export default {
  title: "Blog/Comments",
};

export const comment = () => (
  <CommentListItem
    comment={{
      author: "John Doe",
      articleId: "132",
      commentId: "132",
      content: "Lorem ipsum dolor sit amet",
      postedAt: "2020-01-01",
      score: 5,
    }}
  />
);

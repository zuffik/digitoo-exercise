import * as React from "react";
import { CommentForm } from "./CommentForm";
import { action } from "@storybook/addon-actions";

export default {
  title: "Blog/Comments",
};

export const form = () => (
  <CommentForm count={5} onSubmit={action("onSubmit")} />
);

import * as React from "react";
import { ArticleListItem } from "./ArticleListItem";

export default {
  title: "Blog/Articles",
};

export const listItem = () => (
  <ArticleListItem
    image={<img src="https://picsum.photos/200" alt="random" />}
    article={{
      articleId: "123",
      createdAt: "2020-01-01",
      lastUpdatedAt: "2020-01-01",
      perex: "Lorem ipsum",
      title: "Dolor sit amet",
      imageId: "132",
    }}
  />
);

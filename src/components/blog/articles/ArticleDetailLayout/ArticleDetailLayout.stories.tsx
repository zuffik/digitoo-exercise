import * as React from "react";
import { ArticleDetailLayout } from "./ArticleDetailLayout";

export default {
  title: "Blog/Articles",
};

export const detailLayout = () => (
  <ArticleDetailLayout
    image={<img src="https://picsum.photos/500/200" />}
    article={{
      imageId: "123",
      title: "Related 1",
      perex: "lorem ipsum dolor sit amet",
      lastUpdatedAt: "2020-01-10",
      createdAt: "2020-01-10",
      articleId: "123",
      content: `
                             <p>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur mollis nibh, eget semper mauris 
                             lacinia eu. Cras lobortis mauris laoreet, eleifend dolor ut, pulvinar neque. Nam porta nisi velit, eget sagittis
                             sem vehicula a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                             Pellentesque consectetur risus sit amet purus ullamcorper bibendum. Duis vulputate pellentesque risus, quis 
                             tincidunt lacus mollis vel. Ut ac sodales odio. Nulla convallis sapien sed congue dapibus. Proin eleifend 
                             viverra lacus vel tempor.
                             </p>
                             <p>
                             Nam eu lacus et enim cursus imperdiet non et felis. Curabitur nisl lectus, auctor pharetra leo et, ullamcorper 
                             ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam vel lorem viverra 
                             feugiat nec ac lorem. Ut ut nulla faucibus, faucibus magna a, cursus ipsum. Nam tristique aliquam lobortis. Sed 
                             ut finibus augue. Aliquam pretium arcu ac nisi scelerisque viverra. Aenean non sapien mauris. Curabitur 
                             scelerisque vehicula odio, non fermentum ante dictum at. Aliquam erat volutpat. In hac habitasse platea 
                             dictumst. Fusce ut sem nisi.
                             </p>
                             `,
      comments: [
        {
          commentId: "1",
          score: 5,
          content: "Lorem ipsum.. i hate lorem already",
          postedAt: "2020-01-01",
          articleId: "123",
          author: "John Doe",
        },

        {
          commentId: "2",
          score: -3,
          content: "Lorem ipsum.. i hate lorem already",
          postedAt: "2020-01-01",
          articleId: "123",
          author: "John Doe",
        },
      ],
    }}
    relatedArticles={{
      pagination: { limit: 10, offset: 0, total: 100 },
      items: [
        {
          imageId: "123",
          title: "Related 1",
          perex: "lorem ipsum dolor sit amet",
          lastUpdatedAt: "2020-01-01",
          createdAt: "2020-01-01",
          articleId: "123",
        },
        {
          imageId: "123",
          title: "Related 2",
          perex: "lorem ipsum dolor sit amet",
          lastUpdatedAt: "2020-01-01",
          createdAt: "2020-01-01",
          articleId: "125",
        },
      ],
    }}
  />
);

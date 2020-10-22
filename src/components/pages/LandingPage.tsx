import * as React from "react";
import { NavBarLayout } from "../layout/navigation/NavBarLayout/NavBarLayout";
import { Alert } from "../elementary/Alert/Alert";
import { useAxios } from "../../services/http/HttpHooks";
import { List } from "../../services/types/entity/List";
import { Article } from "../../services/types/entity/Article";
import { CenteredSpinner } from "../elementary/progress/CenteredSpinner/CenteredSpinner";
import { ListView } from "../layout/ListView/ListView";
import { ArticleListItem } from "../blog/articles/ArticleListItem/ArticleListItem";
import { RemoteImage } from "../elementary/RemoteImage/RemoteImage";

interface Props {}

export const LandingPage: React.FC<Props> = (props: Props) => {
  const [{ data, error, loading }] = useAxios<List<Article>>(`/articles`);

  return (
    <NavBarLayout>
      <h2 className="my-5">Recent articles</h2>
      {!loading && !error ? (
        <ListView
          items={data.items || []}
          pagination={data.pagination}
          render={(article: Article) => (
            <ArticleListItem
              article={article}
              image={<RemoteImage imageId={article.imageId} />}
            />
          )}
        />
      ) : loading ? (
        <CenteredSpinner />
      ) : (
        <Alert type="danger">There was an error</Alert>
      )}
    </NavBarLayout>
  );
};
import * as React from 'react';
import {Alert} from '../../elementary/Alert/Alert';
import {List} from '../../../services/types/entity/List';
import {Article} from '../../../services/types/entity/Article';
import {CenteredSpinner} from '../../elementary/progress/CenteredSpinner/CenteredSpinner';
import {ListView} from '../../layout/ListView/ListView';
import {ArticlePreview} from '../../blog/articles/ArticlePreview/ArticlePreview';
import {RemoteImage} from '../../elementary/RemoteImage/RemoteImage';
import {useGet} from "../../../hooks/Http";

interface Props {}

export const LandingPage: React.FC<Props> = (props: Props) => {
  const [{data, error, loading}] = useGet<List<Article>>(`/articles`);

  return (
    <>
      <h2 className="my-5">Recent articles</h2>
      {!loading && !error ? (
        <ListView
          items={data.items || []}
          pagination={data.pagination}
          render={(article: Article) => (
            <ArticlePreview article={article} />
          )}
        />
      ) : loading ? (
        <CenteredSpinner />
      ) : (
        <Alert type="danger">There was an error</Alert>
      )}
    </>
  );
};

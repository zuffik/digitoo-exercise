import * as React from 'react';
import {Alert} from '../../elementary/Alert/Alert';
import {List} from '../../../services/types/entity/List';
import {Article} from '../../../services/types/entity/Article';
import {CenteredSpinner} from '../../elementary/progress/CenteredSpinner/CenteredSpinner';
import {ListView} from '../../layout/ListView/ListView';
import {ArticlePreview} from '../../blog/articles/ArticlePreview/ArticlePreview';
import {defaultHttpState, HttpState} from "../../../services/types/HttpState";
import {handleHttpPromise} from "../../../services/http/HttpPromise";
import {httpClient} from "../../../services/http/HttpClient";

interface Props {
}

export const LandingPage: React.FC<Props> = (props: Props) => {
    const [{data, error, loading}, setArticles] = React.useState<HttpState<List<Article>>>(defaultHttpState);
    React.useEffect(() => {
        handleHttpPromise(httpClient.get('/articles'), setArticles);
    }, []);

    return (
        <>
            <h2 className="my-5">Recent articles</h2>
            {!loading && !error && data ? (
                <ListView
                    items={data.items || []}
                    pagination={data.pagination}
                    render={(article: Article) => (
                        <ArticlePreview article={article}/>
                    )}
                />
            ) : loading ? (
                <CenteredSpinner/>
            ) : (
                <Alert type="danger">There was an error</Alert>
            )}
        </>
    );
};

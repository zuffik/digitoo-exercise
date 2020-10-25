import * as React from 'react';
import {List} from "../../../services/types/entity/List";
import {Article} from "../../../services/types/entity/Article";
import {CenteredSpinner} from "../../elementary/progress/CenteredSpinner/CenteredSpinner";
import {Alert} from "../../elementary/Alert/Alert";
import {useHistory} from "react-router";
import {Routes} from "../../../services/routes/Routes";
import {HeadingButtonContent} from "../../layout/HeadingButtonContent/HeadingButtonContent";
import {ArticleTable} from "../../blog/admin/ArticleTable/ArticleTable";
import {defaultHttpState, HttpState} from "../../../services/types/HttpState";
import {httpClient} from "../../../services/http/HttpClient";
import {handleHttpPromise} from "../../../services/http/HttpPromise";

interface Props {
}

export const MyArticlesPage: React.FC<Props> = (props: Props) => {
    const [articles, setArticles] = React.useState<HttpState<List<Article>>>(defaultHttpState);
    const [removedArticle, setRemovedArticle] = React.useState<HttpState<never>>(defaultHttpState);
    const fetchArticles = () => handleHttpPromise(httpClient.get('/articles'), setArticles);
    React.useEffect(() => {
        fetchArticles();
    }, []);

    const history = useHistory();
    const onEditArticle = (articleId: string) => history.push(Routes.articles.edit(articleId));
    const onRemoveArticle = (articleId: string) => {
        handleHttpPromise(httpClient.delete(`/articles/${articleId}`), setRemovedArticle, () => fetchArticles());
    }

    // could be better for UX
    if (articles.loading || !articles.data) return <CenteredSpinner/>;
    if (articles.error) return <Alert type="danger">There was an error fetching articles</Alert>;
    return (
        <HeadingButtonContent heading="My articles"
                              buttonText="Create new article"
                              onButtonClick={() => history.push(Routes.articles.create())}>
            <ArticleTable articles={articles.data!}
                          onRemoveArticleClick={onRemoveArticle}
                          onEditArticleClick={onEditArticle}/>
            {removedArticle.loading && <CenteredSpinner/>}
        </HeadingButtonContent>
    );
};

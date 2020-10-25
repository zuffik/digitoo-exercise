import * as React from 'react';
import {ArticleForm} from "../../blog/admin/ArticleForm/ArticleForm";
import {ArticleDetail} from "../../../services/types/entity/ArticleDetail";
import {ArticleDraft} from "../../../services/types/dto/ArticleDraft";
import {useHistory, useParams} from "react-router";
import {Routes} from "../../../services/routes/Routes";
import {defaultHttpState, HttpState} from "../../../services/types/HttpState";
import {handleHttpPromise} from "../../../services/http/HttpPromise";
import {httpClient} from "../../../services/http/HttpClient";
import {CenteredSpinner} from "../../elementary/progress/CenteredSpinner/CenteredSpinner";

interface Props {
}

export const EditArticlePage: React.FC<Props> = (props: Props) => {
    const history = useHistory();
    const params = useParams<{id: string}>();
    const [article, setArticle] = React.useState<HttpState<ArticleDetail>>(defaultHttpState());
    const onSubmit = (article: ArticleDraft) => handleHttpPromise(httpClient.patch(`/articles/${params.id}`, {
        ...article,
        articleId: params.id
    }), setArticle, (response) => {
        history.push(Routes.articles.detail(response.data.articleId));
    });
    React.useEffect(() => {
        if (!article.data) {
            handleHttpPromise(httpClient.get(`/articles/${params.id}`), setArticle);
        }
    }, [article, params.id]);
    if (article.loading) return <CenteredSpinner/>;
    return (
        <ArticleForm onSubmit={onSubmit} loading={article.loading} article={article.data}/>
    );
};

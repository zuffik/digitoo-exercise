import * as React from 'react';
import {ArticleForm} from "../../blog/admin/ArticleForm/ArticleForm";
import {ArticleDetail} from "../../../services/types/entity/ArticleDetail";
import {ArticleDraft} from "../../../services/types/dto/ArticleDraft";
import {useHistory} from "react-router";
import {Routes} from "../../../services/routes/Routes";
import {defaultHttpState, HttpState} from "../../../services/types/HttpState";
import {handleHttpPromise} from "../../../services/http/HttpPromise";
import {httpClient} from "../../../services/http/HttpClient";

interface Props {
}

export const CreateArticlePage: React.FC<Props> = (props: Props) => {
    const history = useHistory();
    const [article, setArticle] = React.useState<HttpState<ArticleDetail>>(defaultHttpState());
    const onSubmit = (article: ArticleDraft) => handleHttpPromise(httpClient.post(`/articles`, article), setArticle, (response) => {
        history.push(Routes.articles.detail(response.data.articleId));
    });
    return (
        <ArticleForm onSubmit={onSubmit} loading={article.loading} article={article.data}/>
    );
};

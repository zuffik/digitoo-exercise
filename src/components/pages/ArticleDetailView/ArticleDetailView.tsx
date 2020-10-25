import * as React from 'react';
import {ListView} from '../../layout/ListView/ListView';
import {Comment} from "../../../services/types/entity/Comment";
import {useParams} from 'react-router';
import {ArticleDetail as ArticleDetailDTO} from '../../../services/types/entity/ArticleDetail';
import classNames from 'classnames';
import styles from './ArticleDetailView.module.sass';
import {ArticleMiniature} from '../../blog/articles/ArticleMiniature/ArticleMiniature';
import {Spinner} from '../../elementary/progress/Spinner/Spinner';
import {Alert} from '../../elementary/Alert/Alert';
import {ArticleDetail} from '../../blog/articles/ArticleDetail/ArticleDetail';
import {CommentForm} from '../../blog/comments/CommentForm/CommentForm';
import {CommentListItem} from '../../blog/comments/CommentListItem/CommentListItem';
import {Link} from 'react-router-dom';
import {Routes} from "../../../services/routes/Routes";
import {defaultHttpState, HttpState} from "../../../services/types/HttpState";
import {httpClient} from "../../../services/http/HttpClient";
import {List} from "../../../services/types/entity/List";
import {Article} from "../../../services/types/entity/Article";
import {CreateComment} from "../../../services/types/dto/CreateComment";
import {handleHttpPromise} from "../../../services/http/HttpPromise";

interface Props {
}

export const ArticleDetailView: React.FC<Props> = (props: Props) => {
    const params = useParams<{ id: string }>();
    const articleId = React.useRef<string | undefined>();
    const [article, setArticle] = React.useState<HttpState<ArticleDetailDTO>>(defaultHttpState());
    const [voteComment, setVoteComment] = React.useState<HttpState<Comment>>(defaultHttpState());
    const [newComment, setNewComment] = React.useState<HttpState<Comment>>(defaultHttpState());
    const [relatedArticles, setRelatedArticles] = React.useState<HttpState<List<Article>>>(defaultHttpState());

    const fetchArticle = (id: string) => {
        handleHttpPromise(httpClient.get<ArticleDetailDTO>(`/articles/${id}`), setArticle, response => {
            articleId.current = response.data.articleId;
        })
    }
    React.useEffect(() => {
        if (article.data?.articleId !== articleId.current || !article.data) {
            fetchArticle(params.id);
        }
    }, [article, params.id]);
    React.useEffect(() => {
        if (!relatedArticles.data) {
            handleHttpPromise(httpClient.get(`/articles`), setRelatedArticles);
        }
    }, [relatedArticles]);

    const commentVote = (commentId: string, rating: 'up' | 'down') => {
        handleHttpPromise(httpClient.post<Comment>(`/comments/${commentId}/vote/${rating}`), setVoteComment, () => fetchArticle(params.id));
    }
    const onCommentUpVote = (commentId: string) => commentVote(commentId, 'up');
    const onCommentDownVote = (commentId: string) => commentVote(commentId, 'down');
    const onCommentPost = (comment: CreateComment) => {
        handleHttpPromise(httpClient.post<Comment>(`/comments`, {
            articleId: article.data!.articleId,
            ...comment,
        }), setNewComment, () => fetchArticle(params.id));
    }
    return (
        <>
            <div className="row align-items-start">
                <div className="col-12 col-md-8 order-1 order-md-0">
                    {article.data ? (
                        <>
                            <ArticleDetail article={article.data}/>
                            <hr className="mt-5 mb-4"/>
                            {/*todo move to comment section, due to websockets*/}
                            <CommentForm
                                loading={newComment.loading}
                                count={article.data.comments.length}
                                onSubmit={onCommentPost}
                            />
                            {article.data.comments.map((comment) => (
                                <CommentListItem
                                    key={comment.commentId}
                                    comment={comment}
                                    onUpVote={onCommentUpVote?.bind(undefined, comment.commentId)}
                                    onDownVote={onCommentDownVote?.bind(undefined, comment.commentId)}
                                />
                            ))}
                        </>
                    ) : article.loading ? (
                        <Spinner/>
                    ) : (
                        <Alert type="danger">Error fetching related articles</Alert>
                    )}
                </div>
                <div className={classNames('col-12 col-md-4 order-0 order-md-1 pb-4', styles.relatedArticles)}>
                    <h4 className="mb-4">Related articles</h4>
                    {!relatedArticles.loading && !relatedArticles.error && relatedArticles.data ? (
                        <ListView
                            items={relatedArticles.data.items}
                            pagination={relatedArticles.data.pagination}
                            render={(article: Article) => (
                                <Link to={Routes.articles.detail(article.articleId)}>
                                    <ArticleMiniature heading={5} title={article.title} perex={article.perex}/>
                                </Link>
                            )}
                        />
                    ) : relatedArticles.loading ? (
                        <Spinner/>
                    ) : (
                        <Alert type="danger">Error fetching related articles</Alert>
                    )}
                </div>
            </div>
        </>
    );
};

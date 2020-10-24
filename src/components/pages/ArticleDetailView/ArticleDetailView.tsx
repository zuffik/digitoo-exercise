import * as React from 'react';
import {ListView} from '../../layout/ListView/ListView';
import {useParams} from 'react-router';
import {useAxios, useGet, usePost} from '../../../services/http/HttpHooks';
import {ArticleDetail as ArticleDetailDTO} from '../../../services/types/entity/ArticleDetail';
import classNames from 'classnames';
import styles from './ArticleDetailView.module.sass';
import {ArticleMiniature} from '../../blog/articles/ArticleMiniature/ArticleMiniature';
import {List} from '../../../services/types/entity/List';
import {Article} from '../../../services/types/entity/Article';
import {Spinner} from '../../elementary/progress/Spinner/Spinner';
import {Alert} from '../../elementary/Alert/Alert';
import {ArticleDetail} from '../../blog/articles/ArticleDetail/ArticleDetail';
import {CommentForm} from '../../blog/comments/CommentForm/CommentForm';
import {CommentListItem} from '../../blog/comments/CommentListItem/CommentListItem';
import {RemoteImage} from '../../elementary/RemoteImage/RemoteImage';
import {Comment} from '../../../services/types/entity/Comment';
import {CreateComment} from '../../../services/types/dto/CreateComment';

interface Props {}

export const ArticleDetailView: React.FC<Props> = (props: Props) => {
    const params = useParams<{id: string}>();

    const [{data: article, loading: loadingArticle}, refetchArticle] = useGet<ArticleDetailDTO>(
        `/articles/${params.id}`
    );
    const [{data: relatedArticles, loading: loadingRelatedArticles, error: errorRelatedArticles}] = useGet<
        List<Article>
    >(`/articles`);
    const [{loading: loadingNewComment}, postNewComment] = usePost<Comment>(`/comments`, {}, {manual: true});
    const [{loading: loadingVoteComment}, postVoteComment] = useAxios<Comment>(
        {method: 'post'},
        {manual: true}
    );

    const onCommentPost = (comment: CreateComment) =>
        postNewComment({
            data: {
                articleId: article.articleId,
                ...comment,
            },
        });
    const onCommentUpVote = (commentId: string) => postVoteComment({url: `/comments/${commentId}/vote/up`});
    const onCommentDownVote = (commentId: string) =>
        postVoteComment({url: `/comments/${commentId}/vote/down`});
    React.useEffect(() => {
        if (!loadingNewComment) {
            refetchArticle();
        }
    }, [loadingNewComment, loadingVoteComment, refetchArticle]);

    return (
        <>
            <div className="row align-items-start">
                <div className="col-12 col-md-8 order-1 order-md-0">
                    {article ? (
                        <>
                            <ArticleDetail
                                article={article}
                                image={<RemoteImage imageId={article.imageId} />}
                            />
                            <hr className="mt-5 mb-4" />
                            {/*todo move to comment section, due to websockets*/}
                            <CommentForm
                                loading={loadingNewComment}
                                count={article.comments.length}
                                onSubmit={onCommentPost}
                            />
                            {article.comments.map((comment) => (
                                <CommentListItem
                                    key={comment.commentId}
                                    comment={comment}
                                    onUpVote={onCommentUpVote?.bind(undefined, comment.commentId)}
                                    onDownVote={onCommentDownVote?.bind(undefined, comment.commentId)}
                                />
                            ))}
                        </>
                    ) : loadingArticle ? (
                        <Spinner />
                    ) : (
                        <Alert type="danger">Error fetching related articles</Alert>
                    )}
                </div>
                <div
                    className={classNames('col-12 col-md-4 order-0 order-md-1 pb-4', styles.relatedArticles)}
                >
                    <h4 className="mb-4">Related articles</h4>
                    {!loadingRelatedArticles && !errorRelatedArticles ? (
                        <ListView
                            items={relatedArticles.items}
                            pagination={relatedArticles.pagination}
                            render={(article) => (
                                <ArticleMiniature heading={5} title={article.title} perex={article.perex} />
                            )}
                        />
                    ) : loadingRelatedArticles ? (
                        <Spinner />
                    ) : (
                        <Alert type="danger">Error fetching related articles</Alert>
                    )}
                </div>
            </div>
        </>
    );
};

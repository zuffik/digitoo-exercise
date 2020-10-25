import * as React from 'react';
import {CommentForm} from "../CommentForm/CommentForm";
import {CommentListItem} from "../CommentListItem/CommentListItem";
import {ArticleDetail} from "../../../../services/types/entity/ArticleDetail";
import {handleHttpPromise} from "../../../../services/http/HttpPromise";
import {httpClient} from "../../../../services/http/HttpClient";
import {Comment} from "../../../../services/types/entity/Comment";
import {CreateComment} from "../../../../services/types/dto/CreateComment";
import {defaultHttpState, HttpState} from "../../../../services/types/HttpState";
import {useWebsocketCommentEvents} from "../../../../hooks/CommentsWebSocket";

interface Props {
    article: ArticleDetail;
    onNewComment: (comment: Comment) => void;
    onCommentVote: (comment: Comment, rating: 'up' | 'down') => void;
}

export const CommentSection: React.FC<Props> = ({onCommentVote, onNewComment, ...props}: Props) => {
    const [, setVoteComment] = React.useState<HttpState<Comment>>(defaultHttpState());
    const [newComment, setNewComment] = React.useState<HttpState<Comment>>(defaultHttpState());
    useWebsocketCommentEvents({
        onCommentCreated: onNewComment,
        onCommentUpVoted: comment => onCommentVote(comment, 'up'),
        onCommentDownVoted: comment => onCommentVote(comment, 'down'),
    });
    const commentVote = (commentId: string, rating: 'up' | 'down') => {
        handleHttpPromise(httpClient.post<Comment>(`/comments/${commentId}/vote/${rating}`), setVoteComment, response => onCommentVote(response.data, rating));
    }
    const onCommentUpVote = (commentId: string) => commentVote(commentId, 'up');
    const onCommentDownVote = (commentId: string) => commentVote(commentId, 'down');
    const onCommentPost = (comment: CreateComment) => {
        handleHttpPromise(httpClient.post<Comment>(`/comments`, {
            articleId: props.article.articleId,
            ...comment,
        }), setNewComment, response => onNewComment(response.data));

    }
    return (
        <>
            <CommentForm
                loading={newComment.loading}
                count={props.article.comments.length}
                onSubmit={onCommentPost}
            />
            {props.article.comments.map((comment) => (
                <CommentListItem
                    key={comment.commentId}
                    comment={comment}
                    onUpVote={onCommentUpVote?.bind(undefined, comment.commentId)}
                    onDownVote={onCommentDownVote?.bind(undefined, comment.commentId)}
                />
            ))}
        </>
    );
};

import * as React from "react";
import {ListView} from "../../../layout/ListView/ListView";
import {Article} from "../../../../services/types/entity/Article";
import {ArticleDetail as ArticleDetailDTO} from "../../../../services/types/entity/ArticleDetail";
import {List} from "../../../../services/types/entity/List";
import {ArticleMiniature} from "../ArticleMiniature/ArticleMiniature";
import classNames from "classnames";
import styles from "./ArticleDetailLayout.module.sass";
import {ArticleDetail} from "../ArticleDetail/ArticleDetail";
import {CommentForm} from "../../comments/CommentForm/CommentForm";
import {CommentListItem} from "../../comments/CommentListItem/CommentListItem";

interface Props {
    relatedArticles: List<Article>;
    article: ArticleDetailDTO;
    image: React.ReactNode;
}

export const ArticleDetailLayout: React.FC<Props> = (props: Props) => {
    return (
        <div className="row align-items-start">
            <div
                className="col-12 col-md-8 order-1 order-md-0"
            >
                <ArticleDetail article={props.article} image={props.image}/>
                <hr className="mt-5 mb-4"/>
                <CommentForm
                    count={props.article.comments.length}
                    onSubmit={() => {
                    }}
                />
                {props.article.comments.map((comment) => (
                    <CommentListItem key={comment.commentId} comment={comment}/>
                ))}
            </div>
            <div className={classNames("col-12 col-md-4 order-0 order-md-1 pb-4",
                styles.relatedArticles
            )}>
                <h4 className="mb-4">Related articles</h4>
                <ListView
                    items={props.relatedArticles.items}
                    pagination={props.relatedArticles.pagination}
                    render={(article) => (
                        <ArticleMiniature heading={5} title={article.title} perex={article.perex}/>
                    )}
                />
            </div>
        </div>
    );
};

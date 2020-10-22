import { Article } from "./Article";
import { Comment } from "./Comment";

export interface ArticleDetail extends Article {
  content: string;
  comments: Comment[];
}

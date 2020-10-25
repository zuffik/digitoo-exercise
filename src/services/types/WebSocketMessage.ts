import {Comment} from "./entity/Comment";

export interface WebSocketMessage {
    changeType: 'commentCreated' | 'commentUpVoted' | 'commentDownVoted';
    comment?: Comment;
}

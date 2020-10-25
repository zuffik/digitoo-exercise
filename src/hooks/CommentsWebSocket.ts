import {Comment} from "../services/types/entity/Comment";
import * as React from "react";
import {useWebsocket} from "./WebSocket";

/**
 * These events are emitted on every detail (comments have no info about article they belong to)
 * @param evts
 */
export const useWebsocketCommentEvents = (evts: {
    onCommentCreated: (comment: Comment) => void;
    onCommentDownVoted: (comment: Comment) => void;
    onCommentUpVoted: (comment: Comment) => void;
}) => {
    const ws = useWebsocket();
    React.useEffect(() => {
        if (ws) {
            ws.onReceiveJson(json => {
                switch (json.changeType) {
                    case "commentCreated":
                        evts.onCommentCreated(json.comment!);
                        break;
                    case "commentDownVoted":
                        evts.onCommentDownVoted(json.comment!);
                        break;
                    case "commentUpVoted":
                        evts.onCommentUpVoted(json.comment!);
                        break;
                }
            });
        }
    }, [evts, ws])
}

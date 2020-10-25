import * as React from "react";
import {w3cwebsocket as BaseWebSocket} from "websocket";
import {WebSocketMessage} from "../services/types/WebSocketMessage";

export type WebSocket = BaseWebSocket & {
    onReceiveJson: (clb: (json: WebSocketMessage) => void) => void;
}

export const useWebsocket = (): WebSocket | undefined => {
    const [webSocket, setWebSocket] = React.useState<BaseWebSocket | undefined>();
    React.useEffect(() => {
        const ws = new BaseWebSocket(process.env.REACT_APP_WS_URL!);
        ws.onopen = () => {
            setWebSocket(ws);
        };
        ws.onclose = () => {
            setWebSocket(undefined);
        }
    }, []);
    return webSocket ? Object.assign(webSocket, {
        onReceiveJson: (clb => {
            webSocket.onmessage = data => {
                if (typeof data.data === 'string') {
                    clb(JSON.parse(data.data || JSON.stringify(undefined)));
                }
            }
        }) as WebSocket['onReceiveJson']
    }) : undefined;
}

import {State} from "../State";
import {update} from "../../wrappers/Update";

export type LogoutPayload = {}

export const logoutReducer = (state: State) =>
    update(state, {
        accessToken: {$set: undefined}
    });

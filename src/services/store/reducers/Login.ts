import {State} from "../State";
import {Action} from "typescript-fsa";
import {update} from "../../wrappers/Update";
import {AccessToken} from "../../types/entity/AccessToken";

export type LoginPayload = {
    accessToken: AccessToken;
}

export const loginReducer = (state: State, action: Action<LoginPayload>) =>
    update(state, {
        accessToken: {$set: action.payload.accessToken}
    });

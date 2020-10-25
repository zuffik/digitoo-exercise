import {ActionCreator, default as actionCreatorFactory} from 'typescript-fsa';
import {LoginPayload} from "./reducers/Login";
import {LogoutPayload} from "./reducers/Logout";

const actionCreator = actionCreatorFactory();

export class Actions {
  public static readonly logout: ActionCreator<LogoutPayload> = actionCreator('LOGOUT');
  public static readonly login: ActionCreator<LoginPayload> = actionCreator('LOGIN');
}

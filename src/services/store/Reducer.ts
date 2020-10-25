import {State} from './State';
import {Actions} from './Actions';
import {Reducer as ReducerType} from 'redux';
import {Action, AnyAction} from 'typescript-fsa';
import {loginReducer} from "./reducers/Login";
import {logoutReducer} from "./reducers/Logout";

export const ActionReducers = {
    [Actions.logout.type]: logoutReducer,
    [Actions.login.type]: loginReducer
};

export const Reducer: ReducerType<State, AnyAction> = (s: State = new State(), a: AnyAction): State =>
    ActionReducers[a.type]?.(s, a as Action<any>) || s;

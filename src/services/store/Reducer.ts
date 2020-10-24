import {State} from './State';
import {update} from '../wrappers/Update';
import {Actions} from './Actions';
import {Reducer as ReducerType} from 'redux';
import {Action, AnyAction} from 'typescript-fsa';

export const ActionReducers = {
    [Actions.setLoading.type]: (state: State, action: Action<{isLoading: boolean}>) =>
        update(state, {
            isLoading: {$set: action.payload.isLoading},
        }),
};

export const Reducer: ReducerType<State, AnyAction> = (s: State = new State(), a: AnyAction): State =>
    ActionReducers[a.type]?.(s, a as Action<any>);

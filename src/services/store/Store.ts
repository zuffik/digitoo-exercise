import {Store, createStore as cs} from 'redux';
import {Reducer} from './Reducer';
import {State} from './State';

export const createStore = (): Store => cs(Reducer, new State());

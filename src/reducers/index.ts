import { ActionType, getType } from 'typesafe-actions';
import { StoreState } from '../types';
import * as Actions from '../actions';

const initializeState: StoreState = {
  monitoring: false,
  success: 0,
  failure: 0,
};

export const reducer = (state: StoreState = initializeState, action: ActionType<typeof Actions>): StoreState => {
  switch (action.type) {
    case getType(Actions.fetchSuccess):
      return {
        ...state,
        success: state.success + Math.floor(Math.random() * (100 - 1) + 1),
      };
    case getType(Actions.fetchFailure):
      return {
        ...state,
        failure: state.failure + Math.floor(Math.random() * (2 - 0)),
      };
    default:
      console.log(action.type);
      return { ...state };
  }
};

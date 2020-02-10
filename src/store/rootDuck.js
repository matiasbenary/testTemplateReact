import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import * as users from './ducks/users.duck';
import * as activities from './ducks/activities.duck';

export const rootReducer = combineReducers({
  users: users.reducer,
  activities: activities.reducer,
});

export function* rootSaga() {
  yield all([
    users.saga(),
    activities.saga(),
  ]);
}

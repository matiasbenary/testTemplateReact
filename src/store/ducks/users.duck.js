import { call, put, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../../crud/api.crud';

export const actionTypes = {
  GetUsersStart: 'API/GET/USERS/START',
  GetUsersComplete: 'API/GET/USERS/COMPLETE',
  GetUsersError: 'API/GET/USERS/ERROR',
};

const initialAuthState = {};

export const reducer = (state = initialAuthState, action) => {
    console.log(action);
    switch (action.type) {
      case actionTypes.GetUsersStart: {
        return { ...state, loading: true, users: null };
      }
      case actionTypes.GetUsersComplete: {
        const users = action.results.data;
        return { ...state, loading: false, users };
      }
      case actionTypes.GetUsersError: {
        const { error } = action;
        return {
          ...state, loading: false, users: null, error,
        };
      }
      default:
        return state;
    }
  };


export const actions = {
  getUsers: (user) => ({ type: actionTypes.GetUsersStart, payload: { user } }),
};
// Watchers
export function* saga() {
  yield takeLatest(actionTypes.GetUsersStart, getUsersState);
}


export function* getUsersState() {
  try {
    const results = yield call(apiCall, 'user', null, 'GET');
    yield put({ type: actionTypes.GetUsersComplete, results });
  } catch (error) {
    yield put({ type: actionTypes.GetUsersError, error });
  }
}

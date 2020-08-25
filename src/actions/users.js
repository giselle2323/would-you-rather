import { _getUsers } from '../utils/_DATA'
export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

export const getUsers = () => {
  return dispatch => {
      return _getUsers()
      .then( users => {
        dispatch(getUsersSuccess(users));
      })
      .catch(err => {
        dispatch(getUsersError(err.message));
      });
  };
};
const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: {
    users
  }
});

const getUsersError = error => ({
  type: GET_USERS_ERROR,
  payload: {
    error
  }
});


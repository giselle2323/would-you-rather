export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'


export const fetchUsers = users => {
  return {
    type: GET_USERS,
    payload: {
      users,
    }
    
  }
}

export const fetchUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: {
    users,
  }
});

export const fetchUsersError = error => ({
  type: GET_USERS_ERROR,
  payload: {
    error
  }
});


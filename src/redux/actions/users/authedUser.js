export const SET_AUTH_USER = 'SET_AUTHED_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const SIGN_OUT_USER = 'SIGN_OUT_USER'

export const setAuthUser = (id) => {
  return {
    type: SET_AUTH_USER,
    payload: {
      authedUser: id
    }
    
  }
}

export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: {
      user
    }
  }
}

export const signOutUser = (user) => {
  return {
    type: SIGN_OUT_USER,
    payload: {
      user
    }
  }
}
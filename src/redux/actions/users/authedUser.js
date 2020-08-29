export const LOGIN_USER = 'LOGIN_USER'
export const SIGN_OUT_USER = 'SIGN_OUT_USER'


export const loginUser = (id) => {
  return {
    type: LOGIN_USER,
    payload: {
      authedUser: id
    }
  }
}

export const signOutUser = () => {
  return {
    type: SIGN_OUT_USER
  }
}
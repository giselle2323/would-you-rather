import { SET_AUTH_USER, LOGIN_USER, SIGN_OUT_USER } from '../../actions/users'

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.payload.id
    case LOGIN_USER:
      return action.payload.user
    case SIGN_OUT_USER:
      return action.payload.user
    default:
      return null
  }
}


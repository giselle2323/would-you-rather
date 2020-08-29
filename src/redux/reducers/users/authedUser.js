import {LOGIN_USER, SIGN_OUT_USER } from '../../actions/users'

export default function authedUser(state = null, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload.authedUser
    case SIGN_OUT_USER:
      return null
    default:
      return state
  }
}


import { combineReducers } from 'redux'
import authedUser from './authedUser'
import allUsers from './users'

export default combineReducers({
  authedUser,
  allUsers
})
import { combineReducers } from 'redux'
import authedUser from './authedUser'
import allUsers from './users/usersReducer'

export default combineReducers({
  authedUser,
  allUsers
})
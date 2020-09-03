import { combineReducers } from 'redux'
import authedUser from './users/authedUser'
import users from './users/usersReducer'
import questions from './questions/questionsReducer'

export default combineReducers({
  authedUser,
  users,
  questions,
})
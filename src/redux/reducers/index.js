import { combineReducers } from 'redux'
import authedUser from './users/authedUser'
import allUsers from './users/usersReducer'
import questions from './questions/questionsReducer'

export default combineReducers({
  authedUser,
  allUsers,
  questions,
})
import { fetchUsers } from './users'
import { fetchQuestions } from './questions'
import { _getUsers, _getQuestions } from '../../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const getAllData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  )
}


export const getInitialData = () => {
  return dispatch => {
    dispatch(showLoading())
    return getAllData()
    .then(({ users, questions})=> {
      dispatch(fetchUsers(users));
      dispatch(fetchQuestions(questions));
      dispatch(hideLoading())
      
    })
  }
}
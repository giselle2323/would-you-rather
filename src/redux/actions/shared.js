import { fetchUsers } from './users'
import { fetchQuestions } from './questions'
import { } from 're'
import { _getUsers, _getQuestions } from '../../utils/_DATA'

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
    dispatch(showLoading());
    return getAllData().then(({ users, questions})=> {
      dispatch(fetchQuestions(questions));
      dispatch(fetchUsers(users));
      dispatch(hideLoading());
    })
  }
}
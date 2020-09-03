import { fetchUsers } from './users'
import { fetchQuestions } from './questions'
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
    return getAllData().then(({ users, questions})=> {
      dispatch(fetchUsers(users));
      dispatch(fetchQuestions(questions));
      
    })
  }
}
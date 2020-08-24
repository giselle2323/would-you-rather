import { _getUsers } from '../utils/_DATA'
import { receiveUsers } from './users'

export function getUsers() {
  return (dispatch) => {
    return _getUsers()
      .then(({ users}) => {
        console.log(users)
        dispatch(receiveUsers(users))
      })
  }
}
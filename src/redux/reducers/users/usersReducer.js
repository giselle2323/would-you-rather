import { GET_USERS } from '../../actions/users/userActions'



const initialState = {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.payload.users
      };
    default:
      return state;
  }
}
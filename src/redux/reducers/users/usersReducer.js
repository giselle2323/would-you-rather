import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR} from '../../actions/users/userActions'



const initialState = {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.payload.users
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        ...action.payload.users
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        ...action.payload.error
      };
    default:
      return state;
  }
}
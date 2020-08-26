import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR} from '../../actions/users/userActions'



const initialState = {
  loading: false,
  users: [],
  error: null
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
        error: null,
        users: action.payload.users
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload.users
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
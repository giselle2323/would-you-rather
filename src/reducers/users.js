import { GET_USERS_SUCCESS, GET_USERS_ERROR} from '../actions/users'



const initialState = {
  loading: false,
  users: [],
  error: null
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: [...state.users, action.payload]
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
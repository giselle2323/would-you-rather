import { GET_USERS, ADD_VOTE_TO_USER, ADD_QUESTION_TO_USER } from '../../actions/users/userActions'

const initialState = {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.payload.users
      };
    case ADD_QUESTION_TO_USER:
      const { author, id } = action.payload;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };
    case ADD_VOTE_TO_USER:
      const {authedUser, qid, option } = action.payload;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: option
          }
        }
      };
    default:
      return state;
  }
}
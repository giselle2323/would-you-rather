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
      const { id, authUser } = action.payload;
      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          questions: state[authUser].questions.concat(id),
        },
      };
    case ADD_VOTE_TO_USER:
      const { qid, author, option } = action.payload;
      return {
        ...state,
        [author]: {
          ...state[author],
          answers: {
            ...state[author].answers,
            [qid]: option,
          },
        },
      };
    default:
      return state;
  }
}
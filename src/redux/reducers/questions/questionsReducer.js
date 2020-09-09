import { GET_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from '../../actions/questions/questionsActions'


const initialState = {};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.payload.questions
      };
    case ADD_QUESTION:
      const { question } = action.payload;
      return {
        ...state,
        [question.id]: question,
      };
    case ADD_ANSWER:
      const { authedUser, qid, option } = action.payload;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [option]: {
            ...state[qid][option],
            votes: state[qid][option].votes.concat(authedUser)
          }
        },
      };
    default:
      return state;
  }
}
import { GET_QUESTIONS, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_ERROR, } from '../../actions/questions/questionsActions'


const initialState = {};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.payload.questions
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        ...action.payload.questions
      };
    case GET_QUESTIONS_ERROR:
      return {
        ...state,
        ...action.payload.error
      };
    default:
      return state;
  }
}
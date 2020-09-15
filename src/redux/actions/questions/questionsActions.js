import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {_saveQuestion} from '../../../utils/_DATA'
import { addQuestionToUser } from '../users'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

export const fetchQuestions = questions => {
  return {
    type: GET_QUESTIONS,
    payload: {
      questions,
    }
    
  }
}


const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    payload: {
      question,
    }
  }
}

export const addAnswerToQuestion = (authedUser, qid, option) => {
  return {
    type: ADD_ANSWER,
    payload: {
      qid,
      authedUser,
      option,
    }
  }
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveQuestion({ optionOneText, optionTwoText, author })
      .then(
        (question) => {
          dispatch(addQuestion(question));
          dispatch(addQuestionToUser(author, question.id));
          dispatch(hideLoading());
        }
      );
  };
}

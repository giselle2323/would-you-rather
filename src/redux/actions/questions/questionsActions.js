import {_saveQuestion} from '../../../utils/_DATA'
import {addQuestionToUser} from '../users'
import { showLoading, hideLoading } from 'react-redux-loading'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS'
export const GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR'
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

export const fetchQuestionsSuccess = questions => ({
  type: GET_QUESTIONS_SUCCESS,
  payload: {
    questions
  }
});

export const fetchQuestionsError = error => ({
  type: GET_QUESTIONS_ERROR,
  payload: {
    error
  }
});

const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    payload: {
      question,
    }
  }
}

export const addAnswerToQuestion = (quid, authedUser, option) => {
  return {
    type: ADD_ANSWER,
    payload: {
      quid,
      authedUser,
      option,
    }
  }
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question.id, author));
        dispatch(hideLoading());
        alert("Task Completed Successfully");
      }
    );
  };
}

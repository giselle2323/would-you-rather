import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestionAnswer } from '../../../utils/_DATA'
import { addAnswerToQuestion, ADD_ANSWER } from '../questions/questionsActions'



export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const ADD_VOTE_TO_USER = 'ADD_VOTE_TO_USER'



export const fetchUsers = users => {
  return {
    type: GET_USERS,
    payload: {
      users,
    }
    
  }
}

export const fetchUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: {
    users,
  }
});

export const fetchUsersError = error => ({
  type: GET_USERS_ERROR,
  payload: {
    error
  }
});

export const addQuestionToUser = (id, authedUser) => ({
  type: ADD_QUESTION_TO_USER,
  payload: {
    id,
    authedUser,
  }
})

const addAnswerToUser = (qid, author, option) =>({
  type: ADD_VOTE_TO_USER,
  payload: {
    qid,
    author,
    option,
  }
})

export function handleSaveQuestionAnswer(authUser, qid, option) {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(addAnswerToUser(qid, authUser, option));
    dispatch(addAnswerToQuestion(qid, authUser, option));

    return _saveQuestionAnswer({ authedUser: authUser, qid, answer: option })
      .then(() => {
        dispatch(hideLoading());
        alert("Task Completed Successfully");
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };
}
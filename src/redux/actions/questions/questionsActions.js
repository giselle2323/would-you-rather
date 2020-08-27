export const GET_QUESTIONS = 'GET_QUESTIONS'
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS'
export const GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR'


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


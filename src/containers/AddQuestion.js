import React, { useState } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../redux/actions/questions'


const AddQuestion = ({authedUser, dispatch, history}) => {
  const [questionOptions, setQuestionOptions ] = useState({optionOne: '', optionTwo: ''})

  const addQuestion = (e) => {
    e.preventDefault();
    dispatch( handleSaveQuestion(questionOptions.optionOne, questionOptions.optionTwo, authedUser))
      .then(() => {
        history.push("/");
      });
  }

  return (
    <div className="add-new-question">
      <h1>Add a new Question</h1>
      <form onSubmit={addQuestion}>
        <input
          type="text"
          className="input-field"
          value={questionOptions.optionOne}
          onChange={e => setQuestionOptions({ optionOne: e.target.value })}
          placeholder="Enter Option One"
          required
        />
        <input
          type="text"
          className="input-field"
          value={questionOptions.optionTwo}
          onChange={e => setQuestionOptions({ optionTwo: e.target.value })}
          placeholder="Enter Option Two"
          required
        />
        <button type="submit" className="primary-cta">
          Add Question
        </button>
      </form>
      <div></div>
    </div>
  )

}


const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }

}

export default connect(mapStateToProps)(AddQuestion);
import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleSaveQuestion } from '../redux/actions/questions'


const AddQuestion = ({authedUser, history, saveQuestion}) => {
  const [options, setOption] = useState({optionOne: '', optionTwo: ''})

  const handleOnChange = event => {
    const { name, value } = event.target;
    setOption({ ...options, [name]: value });
  };

  const addQuestion = (e) => {
    e.preventDefault();
    saveQuestion(options.optionOne, options.optionTwo, authedUser)
    .then(() => {
      history.push("/");
    });
  }

  return (
    <div className="add-new-question">
      <h1 className='new-question-header'>Add a new Question</h1>
      <form onSubmit={addQuestion} className='new-question-form'>
        <input
          type="text"
          className="input-field"
          name='optionOne'
          value={options.optionOne}
          onChange={handleOnChange}
          placeholder="Enter Option One"
          required
        />
        <input
          type="text"
          className="input-field"
          name='optionTwo'
          value={options.optionTwo}
          onChange={handleOnChange}
          placeholder="Enter Option Two"
          
        />
        <button type="submit" className="primary-btn question-btn">
          Add Question
        </button>
      </form>
      <div></div>
    </div>
  )

}

AddQuestion.propTypes = {
  authedUser: PropTypes.string.isRequired,
  saveQuestion: PropTypes.func.isRequired
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }

}
const mapDispatchToProps = dispatch => {
  return {
    saveQuestion: (optionOne, optionTwo, user) => dispatch(handleSaveQuestion(optionOne, optionTwo, user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
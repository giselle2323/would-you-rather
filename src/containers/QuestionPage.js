import React from 'react'
import { connect } from 'react-redux'
import ProgressIndicator from '../components/ProgressIndicator'
import { }

const QuestionPage = (props) => {
  const {dispatch, authedUser, question, author, isAnswered, vote } = props;

  const handleVote = (option) => {
    dispatch(handleSaveQuestionAnswer(authedUser, question.id, option))
  }
  return (
    <div>
      yup
    </div>
  )
};

const mapStateToProps = () => {

}
export default connect(mapStateToProps)(QuestionPage)
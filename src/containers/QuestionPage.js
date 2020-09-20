import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ProgressIndicator from '../components/ProgressIndicator'
import NoMatch from '../components/NoMatch'
import { handleSaveQuestionAnswer } from '../redux/actions/users'

const QuestionPage = ({ authedUser, question, author, answeredQuestions, vote, isNotExists, saveQuestionAnswer }) => {
  
   if (isNotExists) {
    return <NoMatch />
  }

  const { name, avatarURL } = author;
  const { optionOne, optionTwo } = question;

 
  const handleVote = (option) => {
    saveQuestionAnswer(authedUser, question.id, option)
  }
  
  return (
    <div>
      <div className="question-item">
        <header className="question-item-author">{name} asks</header>
        <div className="question-item-content">
          <div>
            <img src={avatarURL} alt="avatar" className="select-user-avatar" />
          </div>
          <span className="vertical-hr" />
          <div className='vote-container'>
            <span className="title">Would you rather</span>
            {answeredQuestions ? (
              <div>
                <ProgressIndicator
                  text={optionOne.text}
                  isA={true}
                  voteA={optionOne.votes.length}
                  voteB={optionTwo.votes.length}
                  vote={vote === "optionOne"}
                />
                <ProgressIndicator
                  text={optionTwo.text}
                  voteA={optionOne.votes.length}
                  voteB={optionTwo.votes.length}
                  vote={vote === "optionTwo"}
                  isA={false}
                />
              </div>
            ) : (
                <div className='vote'>
                  <button
                    className="primary-btn vote-btn"
                    onClick={() => handleVote("optionOne")}
                  >
                    {optionOne.text}
                  </button>
                  <button
                    className="primary-btn vote-btn"
                    onClick={() => handleVote("optionTwo")}
                  >
                    {optionTwo.text}
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
};

QuestionPage.propTypes = {
  authedUser: PropTypes.string, 
  question: PropTypes.object, 
  author: PropTypes.object, 
  answeredQuestions: PropTypes.bool,
  vote: PropTypes.any, 
  isNotExists: PropTypes.bool.isRequired,
  saveQuestionAnswer: PropTypes.func.isRequired
}

const mapStateToProps = ({ authedUser, users, questions }, props) => {


  const { question_id } = props.match.params;
  const question = questions[question_id];

  if (!question) {
    return {
      isNotExists: true,
    };
  }

  const authed = users[authedUser];
  const answeredQuestions = Object.keys(authed.answers).includes(question_id);

  const authorId = questions[question_id].author;
  const author = users[authorId];

  return {
    question,
    author,
    authedUser: authedUser,
    answeredQuestions,
    isNotExists: false,
    vote: answeredQuestions ? authed.answers[question_id] : null,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    saveQuestionAnswer: (authedUser, questionId, option) => dispatch(handleSaveQuestionAnswer(authedUser, questionId, option))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage)
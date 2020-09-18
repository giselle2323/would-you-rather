import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Question = ({author, question, isAnswered}) => {

  const { name, avatarURL } = author;
  const { id, optionOne, optionTwo } = question;

  return (
    <div className="question-item">
      <div className="question-item-author">{name} asks</div>
      <div className="question-item-content">
        <div>
          <img src={avatarURL} alt="avatar" className="select-user-avatar" />
        </div>
        <span className="vertical-hr" />
        <div>
          <span className="title">Would you rather</span>
          <p
            style={{
              fontSize: 14,
            }}
          >
            {optionOne.text}
          </p>
          <p
            style={{
              fontSize: 14,
            }}
          >
            {optionTwo.text}
          </p>
          <Link className="poll-btn" to={`questions/${id}`}>
            {isAnswered === 'Unanswered' ? "Answer" : "View Results"}
          </Link>
        </div>
      </div>
    </div>
  )
}


Question.propTypes = {
  question: PropTypes.shape.isRequired,
  author: PropTypes.isRequired,
  isAnswered: PropTypes.string.isRequired
}

const mapStateToProps = ({ users, questions }, { id }) => {
  const questionItem = questions[id];
  let { author } = questionItem;
  author = users[author];

  return {
    question: questionItem,
    author,
  };
};

export default withRouter(connect(mapStateToProps)(Question));
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Question = ({author, question, isAnswered}) => {

  const { name, avatarURL } = author;
  const { id, optionOne, optionTwo } = question;

  return (
    <section className="question-item">
      <div className="question-item-author">{name} asks</div>
      <div className="question-item-content">
        <div>
          <img src={avatarURL} alt="avatar" className="select-user-avatar" />
        </div>
        <span className="vertical-hr" />
        <div className='question__title'>
          <span className="title">Would you rather</span>
          <p>
            {optionOne.text}
          </p>
          <p>
            {optionTwo.text}
          </p>
          <Link className="poll-btn" to={`questions/${id}`}>
            {isAnswered === 'Unanswered' ? "Answer" : "View Results"}
          </Link>
        </div>
      </div>
    </section>
  )
}


Question.propTypes = {
  question: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
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
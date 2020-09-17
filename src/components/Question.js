import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const Question = (props) => {
  const { name, avatarURL } = props.author;
  const { id, optionOne, optionTwo } = props.question;
  const { isAnswered } = props;
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

const mapStateToProps = ({ users, questions }, { id }) => {
  const questionItem = questions[id];
  console.log(id)
  let { author } = questionItem;
  author = users[author];

  return {
    question: questionItem,
    author,
  };
};

export default withRouter(connect(mapStateToProps)(Question));
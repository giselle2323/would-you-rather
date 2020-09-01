import React from 'react'
import { connect } from 'react-redux'

const Question = () => {
  return (
    <div>Question</div>
  )
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

export default connect(mapStateToProps)(Question);
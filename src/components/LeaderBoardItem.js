import React from 'react'
import { connect } from 'react-redux'

const LeaderBoardItem = ({ user }) => {

  const { id, name, avatarURL, questions, answers } = user;
  const answeredQuestions = Object.keys(answers).length;
  const createdQuestions = questions.length;
  const totalPoints = answeredQuestions + createdQuestions;

  return (
    <div className="leaderboard-item">
      <img src={avatarURL} className="select-user-avatar" alt={id} />
      <div>
        <span className="title">{name}</span>
        <p>Answered Questions : {answeredQuestions}</p>
        <hr />
        <p>Created Questions : {createdQuestions}</p>
      </div>
      <div className="score-board">
        <p>
          Score: {totalPoints}
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = ({ users }, { id }) => {
  return {
    user: users[id],
  };
};


export default connect(mapStateToProps)(LeaderBoardItem)
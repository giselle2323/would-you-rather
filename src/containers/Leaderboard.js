import React  from 'react'
import { connect } from 'react-redux'
import LeaderBoardItem from '../components/LeaderBoardItem'

const LeaderBoard = ({ userIds }) => {
  return (
    <div>
      <h1>Leaderboard</h1>
      {userIds.map((user) => {
        return (
          <LeaderBoardItem key={user} id={user}>
            {user}
          </LeaderBoardItem>
        );
      })}
    </div>
  )
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    authedUser: authedUser,
    userIds: Object.keys(users).sort(
      (a, b) => getCount(users[b]) - getCount(users[a])
    ),
  };
};

const getCount = (user) => {
  return user.questions.length + Object.keys(user.answers).length;
};

export default connect(mapStateToProps)(LeaderBoard);
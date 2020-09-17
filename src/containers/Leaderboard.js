import React  from 'react'
import { connect } from 'react-redux'
import LeaderBoardItem from '../components/LeaderBoardItem'

const LeaderBoard = ({ userIds }) => {
  return (
    <div class='leaderboard'>
      <h1 className='leaderboard-heading'>Leaderboard</h1>
      <section className='leaderborad-item-container'>
        {userIds.map((user) => {
          return (
            <LeaderBoardItem key={user} id={user}>
              {user}
            </LeaderBoardItem>
          );
        })}
      </section>
      
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
import React  from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LeaderBoardItem from '../components/LeaderBoardItem'

const LeaderBoard = ({ userIds }) => {
  return (
    <div className='leaderboard'>
      <h1 className='leaderboard-heading'>Leaderboard</h1>
      <section className='leaderborad-item-container'>
        {userIds.map((user) => {
          return (
            <LeaderBoardItem key={user} id={user} />
          );
        })}
      </section>
      
    </div>
  )
}

LeaderBoard.propTypes = {
  userIds: PropTypes.array.isRequired
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
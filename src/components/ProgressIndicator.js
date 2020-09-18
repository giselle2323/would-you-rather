import React from 'react'
import { Line } from 'rc-progress'
import PropTypes from 'prop-types'


const ProgressIndicator = ({ text, voteA, voteB, isA, vote }) => {

  
  const totalVotes = voteA + voteB;
  const percentage = ( (isA ? voteA : voteB) / totalVotes ) * 100;


  return (
    <div className={vote ? "progress-item-active" : "progress-item"}>
      {vote ? (
        <div className="voted-item">
          Your Vote
        </div>
      ) : (
          ""
        )}
      {text}
      <Line percent={percentage} strokeWidth="4" strokeColor="#faae2b" />
      <p style={{ fontSize: 14 }}>
        {isA
          ? `${voteA} out of ${totalVotes} vote(s)`
          : `${voteB} out of ${totalVotes} vote(s)`}
      </p>
    </div>
  )
}

ProgressIndicator.propTypes = {
  text: PropTypes.string.isRequired, 
  voteA: PropTypes.number.isRequired, 
  voteB: PropTypes.number.isRequired, 
  isA: PropTypes.bool.isRequired,
  vote: PropTypes.string.isRequired
}
export default ProgressIndicator
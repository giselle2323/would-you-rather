import React from 'react'
import { connect } from 'react-redux'
import ProgressIndicator from '../components/ProgressIndicator'
import { handleSaveQuestionAnswer } from '../redux/actions/users'

const QuestionPage = (props) => {

  const {dispatch, authedUser, question, author, isAnswered, vote, isNotExists, history } = props;
  const { name, avatar } = author;
  const { optionOne, optionTwo } = question;
  
  if (isNotExists) {
    history.push("/");
    return null;
  }

  const handleVote = (option) => {
    dispatch(handleSaveQuestionAnswer(authedUser, question.id, option))
  }

 

  return (
    <div>
      <div className="question-item">
        <div className="question-item-author">{name} asks</div>
        <div className="question-item-content">
          <div>
            <img src={avatar} alt="avatar" className="select-user-avatar" />
          </div>
          <span className="vertical-hr" />
          <div>
            <span className="title">Would you rather</span>
            {isAnswered === 'Answered' ? (
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
                <div>
                  <button
                    className="secondary-cta"
                    onClick={() => handleVote("optionOne")}
                  >
                    {optionOne.text}
                  </button>
                  <button
                    className="secondary-cta"
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

const mapStateToProps = ({ authedUser, users, questions }, props) => {


  const { question_id } = props.match.params;
  const question = questions[question_id];

  if (!question) {
    return {
      isNotExists: true,
    };
  }

  const authed = users[authedUser];
  const isAnswered = Object.keys(authed.answers).includes(question_id);

  const authorId = questions[question_id].author;
  const author = users[authorId];

  return {
    question,
    author,
    authedUser: authedUser,
    isAnswered,
    isNotExists: false,
    vote: isAnswered ? authed.answers[question_id] : "",
  };
}
export default connect(mapStateToProps)(QuestionPage)
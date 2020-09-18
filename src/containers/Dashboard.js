import React, { useState } from 'react'
import { connect } from 'react-redux'
import  PropTypes from 'prop-types'
import Question from '../components/Question'

const Dashboard = ({ answeredQuestions, unansweredQuestions }) => {
  const [activeTab, setActiveTab] = useState('Unanswered');
  const [menuTabs] = useState([{name: 'Unanswered'}, {name: 'Answered'}]);

  const onChangeTab = (tabMenu) => {
    setActiveTab(tabMenu)
  }
  
  return (
    <section className='questions-container'>
      <nav className='questions-nav'>
        {menuTabs.map((tab) => (
          <div
            key={tab.name}
            className={tab.name === activeTab
            ? 'tab-link-item-active tab-link'
            : 'tab-link-item tab-link'
            }
            onClick={() => onChangeTab(tab.name)}
          >
            {tab.name}
          </div>
        ))}
      </nav>

      <div className='question-item-container'>
        {activeTab === 'Answered'
          ? answeredQuestions.map((question) => (
            <Question
              key={question}
              isAnswered={activeTab}
              id={question}
            />
          ))
          : unansweredQuestions.map((question) => (
            <Question
              key={question}
              isAnswered={activeTab}
              id={question}
            />
          ))}
      </div>
    </section>
  )
}


Dashboard.propTypes = {
  answeredQuestions: PropTypes.array.isRequired, 
  unansweredQuestions: PropTypes.array.isRequired

}

const mapStateToProps = ({authedUser, questions, users}) => {
  const allQuestions = Object.keys(questions).sort(
    (a,b) => questions[b].timestamp - questions[a].timestamp
  );
  const answeredQuestions = Object.keys(users[authedUser].answers);
  return {
    authedUser: users[authedUser],
    answeredQuestions,
    unansweredQuestions: allQuestions.filter(
      (e) => !answeredQuestions.includes(e)
    )
  }
}

export default connect(mapStateToProps)(Dashboard);
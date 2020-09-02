import React, { useState } from 'react'
import { connect } from 'react-redux'
import Question from '../components/Question'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('');
  const [menuTabs, setMenuTabs] = useState([{name: 'Unanswered'}, {name: 'Answered'}]);

  const onChangeTab = (tabMenu) => {
    setActiveTab(tabMenu)
  }
  
  return (
    <>
      <div>Dashboard</div>
      <nav>
        {menuTabs.map((tab) => (
          <div
            key={tab.name}
            className={tab.name === activeTab
            ? 'tab-link-item-active'
            : 'tab-link-item'
            }
            onClick={onChangeTab(tab.name)}
          >
            {tab.name}
          </div>
        ))}
      </nav>

      <div>
        <Question />
      </div>
    </>
  )
}

const mapStateToProps = ({authedUser, questions, users}) => {
  const allQuestions = Object.keys(questions.questions).sort(
    (a,b) => questions.questions[b].timestamp - questions.questions[a].timestamp
  );
  const answeredQuestions = Object.keys(users.users[authedUser].answers);
  return {
    authedUser: users[authedUser],
    answeredQuestions,
    unansweredQuestions: allQuestions.filter(
      (e) => !answeredQuestions.includes(e)
    )
  }
}

export default connect(mapStateToProps)(Dashboard);
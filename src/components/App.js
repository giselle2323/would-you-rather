import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import {  Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import '../App.css';

import NoMatch from './NoMatch'
import Leaderboard from '../containers/Leaderboard'
import QuestionPage from '../containers/QuestionPage'
import AddQuestion from '../containers/AddQuestion'
import LoadingBar from 'react-redux-loading-bar'

import { getInitialData } from '../redux/actions/shared'
import SelectUser from './SelectUser'
import Dashboard from '../containers/Dashboard'
import Nav from './Nav'
import { signOutUser } from '../redux/actions/users'

const App = ({ dispatch, authedUser } ) => {
  
  useEffect(() => {
    dispatch(getInitialData())
  }, [dispatch]);
  const handleSignOut = () => {
    dispatch(signOutUser())
  }
  return(
    <Router>
      <>
        <LoadingBar />
          <section className='main-container'>
          {authedUser === null ? <Route exact path="/" component={SelectUser} />
            :
              <section className="component-container">
                <Nav authedUser={authedUser} signOut={handleSignOut} />
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/questions/bad_id" exact component={NoMatch} />
                  <Route path="/questions/:question_id" exact component={QuestionPage} />
                  <Route path="/add" exact component={AddQuestion} />
                  <Route path="/leaderboard" exact component={Leaderboard} />
                  <Route component={NoMatch} />
                </Switch>
              </section>
          }
        </section>
        </>
    </Router>
    
  )
};

// App.propTypes = {
//   authedUser: PropTypes.string.isRequired
// }

const mapStateToProps = ({ users, authedUser, questions }) => {
  return {
    users,
    authedUser,
    questions,

  };
};

export default connect(mapStateToProps)(App)
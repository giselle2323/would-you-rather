import React, { useEffect } from 'react'
import { connect } from 'react-redux'
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
        <>
          {authedUser === null ? <Route render={() => <SelectUser />} />
            :
            <section className='main-container'>
              <Nav authedUser={authedUser} signOut={handleSignOut} />
              
                <section className="component-container">
                  <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/questions/bad_id" component={NoMatch} />
                    <Route exact path="/questions/:question_id" component={QuestionPage} />
                    <Route exact path="/add" component={AddQuestion} />
                    <Route exact path="/leaderboard" component={Leaderboard} />
                    <Route component={NoMatch} />
                  </Switch>
                </section>
            </section>
          }

        </>
      </>
    </Router>
    
  )
};



const mapStateToProps = ({ users, authedUser, questions }) => {
  return {
    users,
    authedUser,
    questions,

  };
};

export default connect(mapStateToProps)(App)
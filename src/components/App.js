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
  return(
    <Router>
      <>
        <LoadingBar />
        <div>
          {authedUser === null ? <Route render={() => <SelectUser />} />
            :
            <>
              <Nav authedUser={authedUser} signOut={signOutUser} />
                <section className="App">
                  <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/questions/bad_id" component={NoMatch} />
                    <Route path="/questions/:question_id" component={QuestionPage} />
                    <Route path="/add" component={AddQuestion} />
                    <Route path="/leaderboard" component={Leaderboard} />
                    <Route component={NoMatch} />
                  </Switch>
                </section>
            </>
          }

        </div>
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
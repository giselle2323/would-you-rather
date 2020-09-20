import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import {  Route, Switch, BrowserRouter as Router} from 'react-router-dom'
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

const App = ({ authedUser, signOut, loadData } ) => {
  
  useEffect(() => {
    loadData()
  }, [loadData]);

  let history = useHistory();

  const handleSignOut = () => {
    signOut()
    history('/')
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

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(getInitialData()),
    signOut: () => dispatch(signOutUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
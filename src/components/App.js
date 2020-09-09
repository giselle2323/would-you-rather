import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../App.css';

import NoMatch from './NoMatch'
import Leaderboard from './Leaderboard'
import Home from '../containers/Home'
import QuestionPage from '../containers/QuestionPage'
import AddQuestion from '../containers/AddQuestion'

function App() {
  return (
        <Router>
          <section className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/questions/bad_id" component={NoMatch} />
              <Route path="/questions/:question_id" component={QuestionPage} />
              <Route path="/add" component={AddQuestion} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route component={NoMatch} />
            </Switch>
          </section>
        </Router>
  );
}


export default App;

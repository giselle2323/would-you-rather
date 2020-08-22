import React from 'react';
import { connect } from 'react-redux'
import ROUTES, {RenderRoutes} from '../routes/routes'
import logo from '../logo.svg';
import '../App.css';

function App() {
  return (
    <section className="App">
      <div>
        <RenderRoutes routes={ROUTES} />
      </div>
    </section>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);

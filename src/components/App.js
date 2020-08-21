import React from 'react';
import ROUTES, {RenderRoutes} from '../routes/routes'
import logo from '../logo.svg';
import '../App.css';

function App() {
  return (
    <section className="App">
      <h1>App</h1>

      <div>
        <RenderRoutes routes={ROUTES} />
      </div>
    </section>
  );
}

export default App;
